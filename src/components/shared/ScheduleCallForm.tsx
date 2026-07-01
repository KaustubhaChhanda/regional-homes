import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useInView } from '@/hooks/useInView'

export function ScheduleCallForm() {
  const [ref, isInView] = useInView(0.1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const inputClass = "w-full bg-surface-alt border border-border rounded-xl pl-12 pr-4 py-3.5 text-sm text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all duration-200"

  return (
    <section ref={ref} id="schedule-call" className="py-20 scroll-mt-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-3">
            Schedule a Call
          </h2>
          <p className="text-text-secondary text-sm">
            Select your preferred day and time, and we'll get back to you promptly
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-6 md:p-8 shadow-lg shadow-primary/5 border border-border/50"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <CheckCircle className="w-16 h-16 text-success mb-4" />
              <h3 className="text-xl font-serif text-primary mb-2">Thank You!</h3>
              <p className="text-text-secondary text-sm">We'll contact you at your preferred time.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>

              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={`${inputClass} appearance-none cursor-pointer`}
                  required
                >
                  <option value="" disabled>Select Time</option>
                  {['8:00 AM','8:30 AM','9:00 AM','9:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM','12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM','2:30 PM','3:00 PM','3:30 PM','4:00 PM','4:30 PM','5:00 PM'].map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>

              <div className="relative md:col-span-2">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div className="relative md:col-span-2">
                <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-text-muted" />
                <textarea
                  name="message"
                  placeholder="Any additional details..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none pt-3.5`}
                />
              </div>

              <div className="md:col-span-2 flex justify-center mt-2">
                <Button type="submit" size="lg" className="gap-2">
                  <Send className="w-4 h-4" />
                  Schedule Call
                </Button>
              </div>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  )
}
