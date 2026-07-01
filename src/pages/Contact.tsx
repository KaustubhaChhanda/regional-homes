import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Navigation, Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScheduleCallForm } from '@/components/shared/ScheduleCallForm'
import { useInView } from '@/hooks/useInView'
import { team } from '@/data/team'

export default function ContactPage() {
  return (
    <>
      {/* Hero with map */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-5xl font-serif text-white mb-6">Get in Touch</h1>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary-light mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">Regional Homes of Lufkin</p>
                    <p className="text-white/70 text-sm">825 N Medford Drive, Lufkin, TX 75901</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-secondary-light" />
                  <a href="tel:9368996256" className="text-white hover:text-secondary-light transition-colors">
                    (936) 899-6256
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-secondary-light" />
                  <a href="mailto:luf@regionalhomes.net" className="text-white hover:text-secondary-light transition-colors">
                    luf@regionalhomes.net
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Navigation className="w-5 h-5 text-secondary-light" />
                  <p className="text-white/70 text-sm">Delivers to Texas & Louisiana</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-secondary-light" />
                  <p className="text-white/70 text-sm">Mon-Fri: 8am-6pm · Sat: 9am-4pm · Sun: Closed</p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=31.3425909,-94.69251779999999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="accent" className="gap-2">
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-2xl h-64 md:h-80"
            >
              <iframe
                title="Regional Homes of Lufkin"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.5!2d-94.6925!3d31.3426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDIwJzMzLjMiTiA5NMKwNDEnMzMuMSJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <TeamSection />

      {/* Service Request */}
      <ServiceRequestSection />

      {/* Schedule Call */}
      <div className="bg-surface-alt">
        <ScheduleCallForm />
      </div>
    </>
  )
}

function TeamSection() {
  const [ref, isInView] = useInView(0.1)

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Our People</p>
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Meet Our Team</h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Our dedicated team is here to help you find the perfect home
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-border/50 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden h-72">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top scale-[1.05] transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-serif text-white font-bold">{member.name}</h3>
                  <p className="text-secondary-light text-sm font-medium">{member.role}</p>
                </div>
              </div>

              <div className="p-5 space-y-3">
                <a
                  href={`mailto:${member.email}`}
                  className="block text-sm text-secondary hover:underline truncate"
                >
                  {member.email}
                </a>
                <a href={`tel:${member.phone}`}>
                  <Button size="sm" className="w-full gap-2">
                    <Phone className="w-3.5 h-3.5" />
                    Call Me
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceRequestSection() {
  const [ref, isInView] = useInView(0.2)
  const [submitted, setSubmitted] = useState(false)

  return (
    <section ref={ref} className="py-24 bg-surface-alt">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-serif text-primary mb-4">Service Request</h2>
            <p className="text-text-secondary mb-4">
              <strong className="text-primary">*Homeowners Only*</strong>
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              Complete the form and a representative will follow up with you regarding your service request.
              Upload applicable images relevant to the matter of request if necessary.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 bg-white rounded-2xl border border-border/50">
                <CheckCircle className="w-16 h-16 text-success mb-4" />
                <h3 className="text-xl font-serif text-primary">Request Submitted!</h3>
                <p className="text-text-secondary text-sm mt-2">We'll get back to you soon.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-border/50 space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <input placeholder="First Name*" required className="col-span-1 bg-surface-alt border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30" />
                  <input placeholder="Last Name*" required className="col-span-1 bg-surface-alt border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input type="email" placeholder="Email*" required className="bg-surface-alt border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30" />
                  <input type="tel" placeholder="Phone" className="bg-surface-alt border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30" />
                </div>
                <input placeholder="Serial Number" className="w-full bg-surface-alt border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30" />
                <textarea
                  rows={4}
                  placeholder="Explain your service request in detail..."
                  className="w-full bg-surface-alt border border-border rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-secondary/30"
                />
                <Button type="submit" className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  Submit Request
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
