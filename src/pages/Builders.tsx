import { motion } from 'framer-motion'
import { ScheduleCallForm } from '@/components/shared/ScheduleCallForm'
import { useInView } from '@/hooks/useInView'
import { builders } from '@/data/builders'

export default function BuildersPage() {
  return (
    <>
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-serif text-white mb-4"
          >
            Our Builders
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 max-w-xl mx-auto"
          >
            We partner with America's most trusted manufactured home builders
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {builders.map((builder, i) => (
            <BuilderCard key={builder.id} builder={builder} index={i} />
          ))}
        </div>
      </section>

      <div className="bg-surface-alt">
        <ScheduleCallForm />
      </div>
    </>
  )
}

function BuilderCard({ builder, index }: { builder: typeof builders[0]; index: number }) {
  const [ref, isInView] = useInView(0.2)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-surface-alt rounded-2xl p-8 md:p-12 border border-border/50"
    >
      <div className="flex flex-col items-center mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-border/30 mb-6">
          <img
            src={builder.logo}
            alt={builder.name}
            className="h-16 md:h-20 w-auto object-contain"
          />
        </div>
        <h2 className="text-2xl md:text-3xl font-serif text-primary text-center">{builder.name}</h2>
      </div>
      <p className="text-text-secondary leading-relaxed text-sm md:text-base">{builder.description}</p>
    </motion.div>
  )
}
