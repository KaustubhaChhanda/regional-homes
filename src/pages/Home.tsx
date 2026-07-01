import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Home as HomeIcon, Paintbrush, CreditCard, Key, Shield, Users, DollarSign, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScheduleCallForm } from '@/components/shared/ScheduleCallForm'
import { useInView } from '@/hooks/useInView'
import { homes } from '@/data/homes'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

/* ─── Hero ─── */
function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/home-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Badge variant="outline" className="mb-6 border-white/30 text-white/90 backdrop-blur-sm bg-white/10">
            The Premier Home Retailer in the Southeast
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight"
        >
          Find the Perfect Home{' '}
          <span className="gradient-text">for Your Family</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
        >
          Explore quality manufactured, mobile, and modular homes from America's leading builders with financing options to fit your budget.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/find-a-home">
            <Button variant="white" size="lg" className="gap-2 group">
              Find a Home
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <a href="#schedule-call">
            <Button variant="outline" size="lg" className="border-white/40 text-white hover:bg-white hover:text-primary">
              Schedule a Call
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}

/* ─── About Section ─── */
function AboutSection() {
  const [ref, isInView] = useInView(0.2)

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src="/images/stack-image-1.jpg"
                alt="Happy family in their new home"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-4 md:right-8 w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white"
            >
              <img
                src="/images/stack-image-2.jpg"
                alt="Beautiful home interior"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">About Regional Homes</p>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6 leading-tight">
              Make your home buying experience easy and enjoyable — no matter your budget.
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Congratulations! You've already made the first great decision by visiting our website.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              <strong className="text-primary">As the premiere manufactured, modular, and mobile home retailer in the Southeast,</strong> we offer turnkey home-buying services designed for those who need to get it right. When choosing us, you can expect dependability, consistency, quality, affordability, and most importantly, satisfaction.
            </p>
            <Link to="/about-us">
              <Button className="gap-2 group">
                Learn More About Us
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─── Featured Homes ─── */
function FeaturedHomesSection() {
  const [ref, isInView] = useInView(0.1)
  const featured = homes.filter(h => h.availableToTour).slice(0, 6)

  return (
    <section ref={ref} className="py-24 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Our Collection</p>
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Featured Homes</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Browse our selection of quality manufactured homes from America's most trusted builders
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featured.map((home) => (
            <motion.div
              key={home.id}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={home.image}
                  alt={home.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {home.availableToTour && (
                  <div className="absolute top-3 left-3">
                    <Badge variant="success" className="bg-secondary text-white shadow-lg">
                      Available to Tour
                    </Badge>
                  </div>
                )}
              </div>
              <div className="p-5">
                <p className="text-xs text-text-muted font-medium uppercase tracking-wider mb-1">
                  Built by {home.builder}
                </p>
                <h3 className="text-lg font-serif font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {home.name}
                </h3>
                <div className="flex items-center gap-3 text-sm text-text-secondary">
                  <span className="bg-surface-alt px-2.5 py-1 rounded-md font-medium">{home.type}</span>
                  <span>{home.beds} Bed / {home.baths} Bath</span>
                  <span className="text-text-muted">•</span>
                  <span>{home.sqft.toLocaleString()} SQFT</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link to="/find-a-home">
            <Button variant="outline" className="gap-2 group">
              View All Homes
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── CTA Banner ─── */
function CTABanner() {
  const [ref, isInView] = useInView(0.2)

  return (
    <section ref={ref} className="relative py-24 bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          src="/logos/regional-icon.svg"
          alt=""
          className="w-16 h-16 mx-auto mb-6 brightness-0 invert opacity-60"
        />
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6"
        >
          It's a Great Time to Buy
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-4"
        >
          <a href="tel:9368996256" className="text-white/80 hover:text-white text-lg transition-colors flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Call <span className="font-bold">(936) 899-6256</span>
          </a>
          <div className="flex items-center gap-3 text-white/40">
            <div className="w-12 h-px bg-white/20" />
            <span className="text-sm">or</span>
            <div className="w-12 h-px bg-white/20" />
          </div>
          <Link to="/contact">
            <Button variant="accent" size="lg">
              Contact Us Today
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── How It Works ─── */
function HowItWorksSection() {
  const [ref, isInView] = useInView(0.1)

  const steps = [
    { icon: HomeIcon, title: 'Shop', desc: 'Explore models and floor plans online or in-person, to find the home that fits your style and budget.' },
    { icon: Paintbrush, title: 'Design', desc: 'Customize your chosen floor plan with the options, finishes, and upgrades you want.' },
    { icon: CreditCard, title: 'Purchase', desc: 'Finalize pricing, secure financing, and complete closing documents with your retailer.' },
    { icon: Key, title: 'Move In', desc: 'Prepare your site, schedule delivery and setup, and get the keys to your new home.' },
  ]

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Simple Process</p>
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">How It Works</h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Your journey to homeownership in four simple steps
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="relative text-center group"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-secondary/30 to-transparent" />
              )}

              <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 mb-6 group-hover:from-secondary/20 group-hover:to-secondary/10 transition-all duration-300">
                <step.icon className="w-10 h-10 text-secondary" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-secondary text-white text-xs font-bold flex items-center justify-center shadow-lg">
                  {i + 1}
                </span>
              </div>

              <h3 className="text-xl font-serif text-primary mb-3">{step.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link to="/financing">
            <Button className="gap-2 group">
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Trusted Partners Marquee ─── */
function TrustedPartnersSection() {
  const [ref, isInView] = useInView(0.2)
  const partners = [
    { name: 'Champion', logo: '/images/partners/champion.png' },
    { name: 'Skyline', logo: '/images/partners/skyline.png' },
    { name: 'Winston', logo: '/images/partners/winston.svg' },
    { name: 'ScotBilt', logo: '/images/partners/scotbilt.png' },
  ]

  return (
    <section ref={ref} className="py-20 bg-surface-alt border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-primary">Trusted Partners</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="overflow-hidden"
        >
          <div className="flex animate-marquee items-center gap-16 hover:[animation-play-state:paused]">
            {[...partners, ...partners, ...partners].map((partner, i) => (
              <img
                key={`${partner.name}-${i}`}
                src={partner.logo}
                alt={partner.name}
                className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500 flex-shrink-0"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Why Choose Us ─── */
function WhyChooseUsSection() {
  const [ref, isInView] = useInView(0.1)

  const reasons = [
    { icon: Shield, title: 'Trusted Brands', desc: 'We partner with America\'s most trusted manufactured home builders including Champion, Winston, Embark, and more.' },
    { icon: DollarSign, title: 'Financing Made Simple', desc: 'With 10+ lending partners, we help you find the financing option that fits your budget and gets you into your dream home.' },
    { icon: Users, title: 'Personalized Service', desc: 'Our experienced team guides you through every step — from choosing a floor plan to moving in. Your satisfaction is our priority.' },
  ]

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Why Us</p>
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Why Choose Regional Homes?</h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-surface-alt to-white border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                <reason.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-serif text-primary mb-3">{reason.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Main Page ─── */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedHomesSection />
      <CTABanner />
      <HowItWorksSection />
      <TrustedPartnersSection />
      <WhyChooseUsSection />
      <div className="bg-surface-alt">
        <ScheduleCallForm />
      </div>
    </>
  )
}
