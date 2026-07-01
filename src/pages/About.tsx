import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Home, Truck, Shield, Wrench, Zap, Sofa, MapPin, HardHat } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScheduleCallForm } from '@/components/shared/ScheduleCallForm'
import { useInView } from '@/hooks/useInView'
import { services } from '@/data/services'
import { builders } from '@/data/builders'

const iconMap: Record<string, React.ElementType> = {
  Home, MapPin, HardHat, Truck, Wrench, Zap, Shield, Sofa
}


export default function AboutPage() {
  const [heroRef, heroInView] = useInView(0.2)
  const [servicesRef, servicesInView] = useInView(0.1)
  const [buildersRef, buildersInView] = useInView(0.1)

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
            About Regional Homes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 max-w-2xl mx-auto text-lg"
          >
            Your trusted partner for manufactured, mobile, and modular homes in the Southeast
          </motion.p>
        </div>
      </section>

      {/* Our Difference */}
      <section ref={heroRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img src="/images/stack-image-1.jpg" alt="Regional Homes family" className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Our Difference</p>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6 leading-tight">
                A One-Stop Destination for Quality Homes
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Regional Homes of Lufkin is a trusted retailer specializing in manufactured, mobile, and modular homes. We offer a wide selection of homes from leading manufacturers and help customers throughout the home-buying process.
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                From selecting a floor plan to financing and installation, our team is with you every step of the way. We believe everyone deserves a quality home that fits their budget and lifestyle.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'Homes Available', value: '25+' },
                  { label: 'Trusted Builders', value: '5+' },
                  { label: 'Lending Partners', value: '10+' },
                  { label: 'Years of Service', value: '10+' },
                ].map(stat => (
                  <div key={stat.label} className="p-4 rounded-xl bg-surface-alt border border-border/50">
                    <p className="text-2xl font-serif font-bold text-secondary">{stat.value}</p>
                    <p className="text-xs text-text-secondary mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/find-a-home" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto min-w-0 sm:min-w-[180px] gap-2 group">
                    Browse Homes
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto min-w-0 sm:min-w-[180px]">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section ref={servicesRef} className="py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Our Services</h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Comprehensive services from home selection to move-in day and beyond
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Home
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group p-6 bg-white rounded-2xl border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-base font-serif font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">{service.description}</p>
                </motion.div>
              )
            })}
          </div>

          <div className="text-center mt-10">
            <Link to="/about-us/services">
              <Button variant="outline" className="gap-2 group">
                View All Services
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Builders Preview */}
      <section ref={buildersRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={buildersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Our Partners</p>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Trusted Builders</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 items-center">
            {builders.map((builder, i) => (
              <motion.div
                key={builder.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={buildersInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group"
              >
                <img
                  src={builder.logo}
                  alt={builder.name}
                  className="h-16 md:h-20 w-auto object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-500"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/about-us/builders">
              <Button variant="outline" className="gap-2 group">
                Learn About Our Builders
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-surface-alt">
        <ScheduleCallForm />
      </div>
    </>
  )
}
