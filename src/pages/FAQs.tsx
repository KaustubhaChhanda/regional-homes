import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Search } from 'lucide-react'
import { ScheduleCallForm } from '@/components/shared/ScheduleCallForm'

interface FAQ {
  question: string
  answer: string
  category: string
}

const faqs: FAQ[] = [
  {
    category: "General",
    question: "What types of homes do you sell?",
    answer: "We sell manufactured, mobile, and modular homes from leading builders including Champion, Winston, Embark, Hamilton, and Bravo. We offer single-wide, double-wide, and triple-wide floor plans to fit every budget and lifestyle."
  },
  {
    category: "General",
    question: "Where are you located?",
    answer: "Our Sales Office & Model Village is located at 825 N Medford Drive, Lufkin, TX 75901. We deliver to Texas and Louisiana."
  },
  {
    category: "General",
    question: "What are your business hours?",
    answer: "We're open Monday through Friday 8am-6pm, Saturday 9am-4pm, and closed on Sundays."
  },
  {
    category: "Buying Process",
    question: "How does the home buying process work?",
    answer: "Our process is simple: 1) Shop — Browse models and floor plans. 2) Design — Customize your chosen floor plan. 3) Purchase — Finalize pricing and secure financing. 4) Move In — We handle delivery, setup, and you get the keys!"
  },
  {
    category: "Buying Process",
    question: "Can I customize my home?",
    answer: "Yes! Many of our builders offer customization options including floor plan modifications, finish selections, appliance upgrades, and more. Our team will help you personalize your home to match your preferences."
  },
  {
    category: "Buying Process",
    question: "Do you have homes available to tour?",
    answer: "Yes, we have multiple model homes available for in-person tours at our Sales Office & Model Village. Check our 'Find a Home' page to see which homes are currently available to tour."
  },
  {
    category: "Financing",
    question: "Do you offer financing?",
    answer: "Yes, we work with 10+ lending partners including Triad Financial Services, 21st Mortgage, Genesis Bank, Cascade Loans, and more to help you find the best financing option for your budget."
  },
  {
    category: "Financing",
    question: "What if I have less-than-perfect credit?",
    answer: "We work with lenders who offer programs for various credit profiles. Our team can help you explore options and get pre-qualified. Contact us to discuss your specific situation."
  },
  {
    category: "Financing",
    question: "How do I get pre-qualified?",
    answer: "You can start the pre-qualification process by contacting us at (936) 899-6256 or visiting our office. We'll connect you with one of our lending partners to assess your financing options."
  },
  {
    category: "Services",
    question: "What services do you provide beyond home sales?",
    answer: "We offer comprehensive services including finding land, site preparation, foundation work, home delivery, installation, utility connections (A/C, plumbing, electrical), extended warranty services, and home furnishing assistance."
  },
  {
    category: "Services",
    question: "Do you handle delivery and installation?",
    answer: "Yes! We coordinate the entire delivery and installation process, including home placement, trim-out, underpinning/skirting, and utility connections."
  },
  {
    category: "Services",
    question: "What warranties are available?",
    answer: "Each home comes standard with a 1-year manufacturer's warranty. We also offer 7-Year/10-Year Structural Warranties for additional peace of mind."
  },
]

export default function FAQsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const categories = ['all', ...new Set(faqs.map(f => f.category))]

  const filtered = faqs.filter(faq => {
    const matchesSearch = !searchQuery ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-serif text-white mb-4"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 max-w-xl mx-auto mb-8"
          >
            Find answers to common questions about our homes, financing, and services
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-xl mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-4 focus:ring-secondary/20 shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-secondary text-white shadow-md'
                    : 'bg-surface-alt text-text-secondary hover:bg-surface-dark'
                }`}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>

          {/* FAQ list */}
          <div className="space-y-3">
            {filtered.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="border border-border/50 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-surface-alt/50 transition-colors"
                >
                  <span className="text-sm font-semibold text-primary pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-text-muted flex-shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-0">
                        <div className="pt-3 border-t border-border/50">
                          <p className="text-text-secondary text-sm leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-secondary">No questions match your search. Try a different query.</p>
            </div>
          )}
        </div>
      </section>

      <div className="bg-surface-alt">
        <ScheduleCallForm />
      </div>
    </>
  )
}
