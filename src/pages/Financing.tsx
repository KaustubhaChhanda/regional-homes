import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, DollarSign, FileText, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScheduleCallForm } from '@/components/shared/ScheduleCallForm'
import { useInView } from '@/hooks/useInView'
import { lenders } from '@/data/lenders'

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }

export default function FinancingPage() {
  const [optionsRef, optionsInView] = useInView(0.1)
  const [processRef, processInView] = useInView(0.1)
  const [lendersRef, lendersInView] = useInView(0.1)

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
            Financing Made Simple
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 max-w-xl mx-auto text-lg mb-8"
          >
            We work with multiple lending partners to find the best financing for your new home
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/contact">
              <Button variant="accent" size="lg" className="gap-2">
                Apply for Financing
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Financing options */}
      <section ref={optionsRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={optionsInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Flexible Options</p>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Financing Options</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={optionsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: DollarSign, title: 'Competitive Rates', desc: 'Access competitive interest rates through our network of 10+ lending partners who specialize in manufactured home financing.' },
              { icon: FileText, title: 'Easy Application', desc: 'Our team helps you navigate the financing process with pre-qualification options and personalized guidance every step of the way.' },
              { icon: ShieldCheck, title: 'Credit Assistance', desc: 'Don\'t have perfect credit? We work with lenders who offer programs for various credit profiles to help you get approved.' },
            ].map(item => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="group p-8 rounded-2xl bg-surface-alt border border-border/50 hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-serif text-primary mb-3">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Home buying process */}
      <section ref={processRef} className="py-24 bg-surface-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Step by Step</p>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Home Buying Process</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              { step: 1, title: 'Get Pre-Qualified', desc: 'Talk to our team about your budget and get pre-qualified with one of our lending partners.' },
              { step: 2, title: 'Choose Your Home', desc: 'Browse our selection of manufactured, mobile, and modular homes. Customize your floor plan.' },
              { step: 3, title: 'Secure Your Financing', desc: 'Work with our financing partners to lock in your rate and finalize your loan terms.' },
              { step: 4, title: 'Prepare Your Site', desc: 'We handle site preparation, foundation, and all necessary permits for your new home.' },
              { step: 5, title: 'Home Delivery & Setup', desc: 'Your home is delivered, installed, and all utilities are connected. Welcome home!' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -30 }}
                animate={processInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 items-start p-6 bg-white rounded-xl border border-border/50"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-primary mb-1">{item.title}</h3>
                  <p className="text-text-secondary text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lending partners */}
      <section ref={lendersRef} className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={lendersInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Our Partners</p>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Lending Partners</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 items-center mb-10">
            {lenders.map((lender, i) => (
              <motion.a
                key={lender.id}
                href={lender.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={lendersInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group p-4 rounded-xl hover:bg-surface-alt transition-colors"
              >
                <img
                  src={lender.logo}
                  alt={lender.name}
                  className="h-12 md:h-16 w-auto object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                />
              </motion.a>
            ))}
          </div>

          <div className="text-center">
            <Link to="/about-us/lenders">
              <Button variant="outline" className="gap-2 group">
                View All Lenders
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="py-24 bg-surface-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-primary mb-6">Have Questions?</h2>
          <p className="text-text-secondary mb-8">
            Check out our frequently asked questions for more information about financing, home buying, and our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/faqs">
              <Button className="gap-2 group">
                View FAQs
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>

      <ScheduleCallForm />
    </>
  )
}
