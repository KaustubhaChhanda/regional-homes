import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScheduleCallForm } from '@/components/shared/ScheduleCallForm'
import { useInView } from '@/hooks/useInView'
import { lenders } from '@/data/lenders'

export default function LendersPage() {
  const [ref, isInView] = useInView(0.1)

  return (
    <>
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-serif text-white mb-4"
          >
            Our Lending Partners
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 max-w-xl mx-auto"
          >
            We work with trusted lenders to help you find the financing that fits your budget
          </motion.p>
        </div>
      </section>

      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lenders.map((lender, i) => (
              <motion.div
                key={lender.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group bg-white rounded-2xl border border-border/50 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="p-8 flex items-center justify-center h-40 bg-surface-alt">
                  <img
                    src={lender.logo}
                    alt={lender.name}
                    className="max-h-20 max-w-[180px] object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <a href={lender.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="default" className="w-full gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Visit Site
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-surface-alt">
        <ScheduleCallForm />
      </div>
    </>
  )
}
