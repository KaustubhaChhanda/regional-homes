import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Trash2, HelpCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

const SUGGESTIONS = [
  "What home builders do you sell?",
  "What are your sales office hours?",
  "How does financing work?",
  "Where are you located & do you deliver?",
]

const SYSTEM_PROMPT = `You are the official AI Assistant for Regional Homes of Lufkin. Your goal is to help users with inquiries regarding manufactured, modular, and mobile home sales, manufacturers, financing partners, and construction services.

Here is the verified information about Regional Homes of Lufkin:
- What They Do: Retailer specializing in manufactured, mobile, and modular homes. Helps throughout the home-buying process, from selecting a floor plan to financing, delivery, and setup.
- Featured Home Manufacturers: Winston Homes, Hamilton Homebuilders, Champion Homes, Franklin Homes, Deer Valley Homebuilders, Bravo Homes, Embark Homes.
- License Info: RBI License #37903.
- Core Services: Manufactured Homes, Mobile Homes, Modular Homes, Floor Plans, Home Financing Assistance, Home Delivery & Setup, Customer Support, Utility connections (A/C, plumbing, electrical).
- Contact Info:
  - Phone: (936) 899-6256
  - Email: luf@regionalhomes.net
  - Office Address: 825 N Medford Drive, Lufkin, TX 75901.
- Business Hours:
  - Monday to Friday: 8:00 AM - 6:00 PM
  - Saturday: 9:00 AM - 4:00 PM
  - Sunday: Closed
- Delivery Range: Delivers homes to Texas (TX) and Louisiana (LA).
- Financing Details: Network of 10+ lenders including Triad Financial Services, 21st Mortgage Corporation, Genesis Bank, Cascade Loans, CSL Financial, FirstBank, CIS Home Loans, Credit Human, Country Place Mortgage, AutoMHatic Financial. Can work with various credit profiles.
- Google Maps Location: If the user asks for directions, a map link, or how to get to the location, you MUST provide this exact link: [Google Maps Directions](https://www.google.com/maps/dir/?api=1&destination=31.3425909,-94.69251779999999). Do not output any other map coordinates or links.

CRITICAL RULES:
1. ONLY answer queries regarding Regional Homes of Lufkin and the home-buying topics detailed above.
2. If a query is completely unrelated to Regional Homes of Lufkin, manufactured homes, financing, or our services (for example: coding, math, general recipe inquiries, general knowledge, other companies), you must politely decline to answer using this exact type of redirection:
   "I apologize, but I am only programmed to assist with questions regarding home purchases, builders, financing, and turnkey services for **Regional Homes of Lufkin**. How can I help you find or finance your new home today?"
3. Keep all responses very short, concise, friendly, and structured. Do not use more than 3-4 sentences per answer. Use bold text (**text**) and bullet lists where appropriate to ensure clarity. All website links should be highlighted or mentioned clearly.`

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  
  const chatEndRef = useRef<HTMLDivElement | null>(null)

  // Load chat history from sessionStorage
  useEffect(() => {
    const saved = sessionStorage.getItem('regional_homes_chat_history')
    if (saved) {
      try {
        setMessages(JSON.parse(saved))
      } catch (e) {
        console.error("Failed to load chat history", e)
      }
    }
  }, [])

  // Auto-scroll to bottom on new message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  const saveHistory = (updated: Message[]) => {
    setMessages(updated)
    sessionStorage.setItem('regional_homes_chat_history', JSON.stringify(updated))
  }

  const handleClear = () => {
    setMessages([])
    sessionStorage.removeItem('regional_homes_chat_history')
    setErrorMsg(null)
  }

  const handleSend = async (text: string) => {
    if (!text.trim()) return
    setErrorMsg(null)

    const userMsg: Message = {
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    const updatedMessages = [...messages, userMsg]
    saveHistory(updatedMessages)
    setInput('')
    setIsLoading(true)

    // Call Groq API
    const apiKey = import.meta.env.VITE_GROQ_API_KEY
    if (!apiKey) {
      setErrorMsg("Groq API Key is missing. Please configure VITE_GROQ_API_KEY in your .env file.")
      setIsLoading(false)
      return
    }

    try {
      const apiBody = {
        model: "llama-3.1-8b-instant",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...updatedMessages.map(msg => ({ role: msg.role, content: msg.content }))
        ],
        temperature: 0.2,
        max_tokens: 300
      }

      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify(apiBody)
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData?.error?.message || `HTTP error ${response.status}`)
      }

      const data = await response.json()
      const reply = data.choices?.[0]?.message?.content || "I apologize, but I could not formulate a response. Please try again."

      const assistantMsg: Message = {
        role: 'assistant',
        content: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }

      saveHistory([...updatedMessages, assistantMsg])
    } catch (err: any) {
      console.error(err)
      setErrorMsg(err.message || "Failed to connect to the assistant. Please check your internet connection or API settings.")
    } finally {
      setIsLoading(false)
    }
  }

  // Parse custom markdown formatting for bold and link
  const renderMessageContent = (text: string) => {
    const parts = []
    let lastIndex = 0
    // Matches **bold** or [text](url)
    const regex = /(\*\*.*?\*\*|\[.*?\]\(.*?\))/g
    let match

    while ((match = regex.exec(text)) !== null) {
      const matchIndex = match.index
      if (matchIndex > lastIndex) {
        parts.push(text.substring(lastIndex, matchIndex))
      }

      const token = match[0]
      if (token.startsWith('**') && token.endsWith('**')) {
        parts.push(
          <strong key={matchIndex} className="font-bold text-[#1F3F4B]">
            {token.slice(2, -2)}
          </strong>
        )
      } else {
        const linkText = token.match(/\[(.*?)\]/)?.[1] || ''
        const linkUrl = token.match(/\((.*?)\)/)?.[1] || ''
        parts.push(
          <a
            key={matchIndex}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline font-bold inline-flex items-center gap-0.5"
          >
            {linkText}
          </a>
        )
      }
      lastIndex = regex.lastIndex
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex))
    }

    return parts.length > 0 ? parts : text
  }

  return (
    <>
      {/* Floating Chatbot Widget Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-24 right-6 z-40 p-4 rounded-full bg-gradient-to-tr from-secondary to-secondary-light text-white shadow-xl hover:shadow-secondary/35 active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center border border-white/20"
        aria-label="Toggle assistant chat"
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="fixed bottom-20 sm:bottom-36 right-4 sm:right-6 z-50 w-[330px] sm:w-[360px] h-[435px] sm:h-[500px] bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-border/50 overflow-hidden flex flex-col glass"
          >
            {/* Header */}
            <div className="bg-[#1F3F4B] p-3 sm:p-4 text-white flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="relative">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/10 flex items-center justify-center font-serif text-sm sm:text-lg font-bold text-accent">
                    RH
                  </div>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xs sm:text-sm leading-tight text-white">Lufkin Assistant</h3>
                  <span className="text-[9px] sm:text-[10px] text-white/60 font-semibold uppercase tracking-wider">AI Powered</span>
                </div>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5">
                {messages.length > 0 && (
                  <button
                    onClick={handleClear}
                    className="p-1.5 sm:p-2 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                    title="Clear history"
                  >
                    <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 sm:p-2 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-surface-alt/40 scrollbar-thin">
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center p-3 sm:p-6 space-y-4 sm:space-y-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-primary mb-1 text-sm sm:text-base">How can I help you?</h4>
                    <p className="text-[11px] sm:text-xs text-text-secondary leading-relaxed">
                      Ask me about home manufacturers, delivery range, financing process, office hours, or locations!
                    </p>
                  </div>
                  
                  {/* Suggestion list */}
                  <div className="w-full flex flex-col gap-1.5 sm:gap-2 pt-1">
                    {SUGGESTIONS.map(s => (
                      <button
                        key={s}
                        onClick={() => handleSend(s)}
                        className="text-left text-[10px] sm:text-xs font-semibold px-3 py-2 sm:px-4 sm:py-3 rounded-xl bg-white border border-border/40 text-primary hover:bg-secondary/5 hover:border-secondary/20 hover:text-secondary transition-all cursor-pointer shadow-sm"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {messages.map((msg, index) => {
                    const isUser = msg.role === 'user'
                    return (
                      <div
                        key={index}
                        className={`flex items-end gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}
                      >
                        {!isUser && (
                          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-serif text-[9px] sm:text-[10px] font-bold shrink-0 mb-1">
                            RH
                          </div>
                        )}
                        <div className="flex flex-col max-w-[78%]">
                          <div className={`rounded-2xl px-3 py-2 sm:px-4 sm:py-3 text-[11px] sm:text-xs leading-relaxed font-medium shadow-sm ${
                            isUser
                              ? 'bg-secondary text-white rounded-br-none'
                              : 'bg-white text-primary border border-border/40 rounded-bl-none'
                          }`}>
                            {isUser ? msg.content : renderMessageContent(msg.content)}
                          </div>
                          <span className={`text-[8px] sm:text-[9px] text-text-muted mt-1 px-1 font-semibold ${isUser ? 'text-right' : 'text-left'}`}>
                            {msg.timestamp}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                  
                  {isLoading && (
                    <div className="flex items-end gap-2 justify-start">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-serif text-[9px] sm:text-[10px] font-bold shrink-0">
                        RH
                      </div>
                      <div className="bg-white border border-border/40 rounded-2xl rounded-bl-none px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2 shadow-sm">
                        <Loader2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-spin text-secondary" />
                        <span className="text-[11px] sm:text-xs text-text-secondary font-medium">Thinking...</span>
                      </div>
                    </div>
                  )}

                  {errorMsg && (
                    <div className="p-2.5 sm:p-3.5 rounded-xl bg-danger/10 border border-danger/20 text-danger text-[10px] sm:text-[11px] font-semibold text-center leading-normal">
                      {errorMsg}
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </>
              )}
            </div>

            {/* Input Footer Area */}
            <form
              onSubmit={(e) => { e.preventDefault(); handleSend(input) }}
              className="p-2.5 sm:p-3 bg-white border-t border-border/40 flex items-center gap-1.5 sm:gap-2"
            >
              <input
                type="text"
                placeholder="Type your question..."
                value={input}
                onChange={e => setInput(e.target.value)}
                className="flex-1 bg-surface-alt/70 border border-border rounded-xl px-3 py-2 text-[11px] sm:text-xs text-primary focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="sm"
                className="h-8 px-3 sm:h-9 sm:px-4 min-w-0"
                disabled={isLoading || !input.trim()}
              >
                <Send className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
