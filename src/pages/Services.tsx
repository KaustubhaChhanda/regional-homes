import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Home, MapPin, HardHat, Truck, Wrench, Zap, Shield, Sofa, CheckCircle2, ArrowRight } from 'lucide-react'
import { ScheduleCallForm } from '@/components/shared/ScheduleCallForm'
import { services } from '@/data/services'

const iconMap: Record<string, React.ElementType> = {
  Home, MapPin, HardHat, Truck, Wrench, Zap, Shield, Sofa
}

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState(1)
  const sectionRefs = useRef<Record<number, HTMLDivElement | null>>({})

  // Track scroll position to update active sidebar item via IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px', // Trigger when section is in active view area
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = Number(entry.target.getAttribute('data-service-id'))
          if (id) {
            setActiveSection(id)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    
    services.forEach(service => {
      const element = sectionRefs.current[service.id]
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: number) => {
    const element = sectionRefs.current[id]
    if (element) {
      const offset = element.offsetTop - 100
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      })
      setActiveSection(id)
    }
  }

  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-light py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary-light font-bold text-xs uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm inline-block mb-4">
              Turnkey Home Buying
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight"
          >
            Our Turnkey Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed font-medium"
          >
            From finding land and securing financing to final delivery, utility setups, and warranty support, we're with you at every step of homeownership.
          </motion.p>
        </div>
      </section>

      {/* Main Services Container */}
      <section className="py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Sticky Sidebar Navigation */}
            <div className="hidden lg:block lg:col-span-4 sticky top-28 bg-white p-6 rounded-2xl shadow-xl shadow-primary/5 border border-border/40">
              <h2 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-6 px-3">
                Service Checklist
              </h2>
              <div className="space-y-1">
                {services.map((service) => {
                  const Icon = iconMap[service.icon] || Home
                  const isActive = activeSection === service.id
                  return (
                    <button
                      key={service.id}
                      onClick={() => scrollToSection(service.id)}
                      className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-left font-semibold text-sm transition-all duration-300 group cursor-pointer ${
                        isActive
                          ? 'bg-secondary text-white shadow-md shadow-secondary/15'
                          : 'text-primary hover:bg-surface-alt hover:text-secondary'
                      }`}
                    >
                      <div className={`p-2 rounded-lg transition-colors duration-300 ${
                        isActive ? 'bg-white/20 text-white' : 'bg-surface-alt text-secondary group-hover:bg-white'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="flex-1 truncate">{service.title}</span>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isActive ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                      }`} />
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Detailed Services Content */}
            <div className="col-span-1 lg:col-span-8 space-y-16">
              {services.map((service, index) => {
                const Icon = iconMap[service.icon] || Home
                return (
                  <motion.div
                    key={service.id}
                    ref={(el) => { sectionRefs.current[service.id] = el }}
                    data-service-id={service.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-lg shadow-primary/5 border border-border/30 hover:border-secondary/20 transition-all duration-500 relative overflow-hidden group"
                  >
                    {/* Top Accent Gradient Border */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary to-accent" />
                    
                    {/* Index Number */}
                    <div className="absolute right-8 top-6 text-7xl md:text-8xl font-serif font-extrabold text-primary/5 select-none transition-colors group-hover:text-secondary/5">
                      0{index + 1}
                    </div>

                    <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                      {/* Icon Container */}
                      <div className="p-4 bg-secondary/10 rounded-2xl text-secondary flex-shrink-0 group-hover:bg-secondary group-hover:text-white transition-all duration-500 group-hover:scale-110 shadow-lg shadow-secondary/5">
                        <Icon className="w-8 h-8" />
                      </div>

                      {/* Content details */}
                      <div className="flex-1">
                        <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-2 block">
                          Step {index + 1} of Homeownership
                        </span>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
                          {service.title}
                        </h3>
                        <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6 font-medium">
                          {service.description}
                        </p>

                        {service.details && (
                          <div className="bg-surface-alt rounded-2xl p-6 border border-border/30 space-y-4">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                              Key Highlights
                            </h4>
                            <ul className="grid grid-cols-1 gap-3.5">
                              {service.details.map((detail, j) => (
                                <li key={j} className="flex items-start gap-3 text-sm text-text-secondary font-medium">
                                  <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Booking form */}
      <div className="bg-white">
        <ScheduleCallForm />
      </div>
    </>
  )
}
