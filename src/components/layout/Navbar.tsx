import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  {
    label: 'About Us',
    href: '/about-us',
    children: [
      { label: 'Our Difference', href: '/about-us' },
      { label: 'Services', href: '/about-us/services' },
      { label: 'Builders', href: '/about-us/builders' },
      { label: 'Lenders', href: '/about-us/lenders' },
    ]
  },
  { label: 'Find a Home', href: '/find-a-home' },
  { label: 'Financing', href: '/financing' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact', href: '/contact' },
]

interface NavbarProps {
  isMobileOpen: boolean
  setIsMobileOpen: (open: boolean) => void
}

export function Navbar({ isMobileOpen, setIsMobileOpen }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()

  // Prevent scrolling behind active mobile drawer
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
    setActiveDropdown(null)
  }, [location.pathname])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 py-2.5",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 relative z-10">
            <img
              src="/logos/regional-logo.svg"
              alt="Regional Homes of Lufkin"
              className="h-9 md:h-10 transition-all duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-1",
                    location.pathname === link.href || location.pathname.startsWith(link.href + '/')
                      ? "text-secondary"
                      : "text-primary hover:text-secondary hover:bg-secondary/5"
                  )}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown className={cn(
                      "w-3.5 h-3.5 transition-transform duration-200",
                      activeDropdown === link.label && "rotate-180"
                    )} />
                  )}
                </Link>

                {/* Dropdown */}
                {link.children && (
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-48 bg-white rounded-xl shadow-xl border border-border/50 overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-4 py-3 text-sm font-medium text-primary hover:bg-secondary/5 hover:text-secondary transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href="tel:9368996256"
              className="hidden md:flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors"
            >
              <Phone className="w-4 h-4" />
              (936) 899-6256
            </a>
            <Link to="/contact">
              <Button size="sm" className="hidden sm:inline-flex">
                Contact Us
              </Button>
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6 pt-6">
                <div className="flex justify-between items-center mb-6 border-b border-border/50 pb-4">
                  <span className="font-serif font-bold text-lg text-primary">Menu</span>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 text-primary transition-colors cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <div key={link.label}>
                      <Link
                        to={link.href}
                        className={cn(
                          "block px-4 py-3 rounded-lg text-base font-semibold transition-colors",
                          location.pathname === link.href
                            ? "text-secondary bg-secondary/5"
                            : "text-primary hover:text-secondary hover:bg-secondary/5"
                        )}
                      >
                        {link.label}
                      </Link>
                      {link.children && (
                        <div className="ml-4 mt-1 mb-2 flex flex-col gap-1 border-l-2 border-border pl-4">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.href}
                              className="block py-2 text-sm font-medium text-text-secondary hover:text-secondary transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="mt-8 pt-6 border-t border-border">
                  <a
                    href="tel:9368996256"
                    className="flex items-center gap-2 text-sm font-bold text-primary mb-4"
                  >
                    <Phone className="w-4 h-4" />
                    (936) 899-6256
                  </a>
                  <Link to="/contact" className="block">
                    <Button className="w-full">Contact Us</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
