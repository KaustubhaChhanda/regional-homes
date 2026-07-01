import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#0B1519] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/logos/regional-logo.svg"
                alt="Regional Homes"
                className="h-12 brightness-0 invert"
              />
            </Link>
            <p className="text-gray-200 font-medium text-sm leading-relaxed mb-6">
              The premiere manufactured, modular, and mobile home retailer in the Southeast.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/regionalhomeslufkin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md shadow-[#1877F2]/20 hover:brightness-110"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/regionalhomes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md shadow-pink-500/20 hover:brightness-110"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-sans font-bold text-sm uppercase tracking-wider mb-6 text-secondary-light">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Find a Home', href: '/find-a-home' },
                { label: 'About Us', href: '/about-us' },
                { label: 'Financing', href: '/financing' },
                { label: 'Our Builders', href: '/about-us/builders' },
                { label: 'FAQs', href: '/faqs' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-300 font-medium hover:text-white text-sm transition-colors duration-200 hover:pl-1 flex items-center"
                  >
                    <span className="mr-1.5 opacity-0 hover:opacity-100 transition-opacity">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-sans font-bold text-sm uppercase tracking-wider mb-6 text-secondary-light">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-secondary-light flex-shrink-0" />
                <span className="text-gray-200 font-medium text-sm">
                  825 N Medford Drive<br />
                  Lufkin, TX 75901
                </span>
              </li>
              <li>
                <a href="tel:9368996256" className="flex items-center gap-3 text-gray-300 font-medium hover:text-white text-sm transition-colors">
                  <Phone className="w-4 h-4 text-secondary-light flex-shrink-0" />
                  (936) 899-6256
                </a>
              </li>
              <li>
                <a href="mailto:luf@regionalhomes.net" className="flex items-center gap-3 text-gray-300 font-medium hover:text-white text-sm transition-colors">
                  <ExternalLink className="w-4 h-4 text-secondary-light flex-shrink-0" />
                  luf@regionalhomes.net
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-xs text-secondary-light font-bold uppercase tracking-wider mb-2">We deliver to</p>
              <p className="text-gray-200 font-semibold text-sm">Louisiana · Texas</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-sans font-bold text-sm uppercase tracking-wider mb-6 text-secondary-light">
              <Clock className="w-4 h-4 inline mr-2 -mt-0.5" />
              Business Hours
            </h4>
            <table className="text-sm w-full">
              <tbody>
                {[
                  { day: 'Monday', hours: '8am - 6pm' },
                  { day: 'Tuesday', hours: '8am - 6pm' },
                  { day: 'Wednesday', hours: '8am - 6pm' },
                  { day: 'Thursday', hours: '8am - 6pm' },
                  { day: 'Friday', hours: '8am - 6pm' },
                  { day: 'Saturday', hours: '9am - 4pm' },
                  { day: 'Sunday', hours: 'Closed' },
                ].map(({ day, hours }) => (
                  <tr key={day}>
                    <td className="py-1.5 text-gray-300 font-medium">{day}</td>
                    <td className={`py-1.5 text-right font-semibold ${hours === 'Closed' ? 'text-danger/90 font-bold' : 'text-gray-200'}`}>
                      {hours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 font-medium text-xs">
            © {new Date().getFullYear()} Regional Homes of Lufkin. All rights reserved. RBI License: #37903
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-gray-400 font-medium hover:text-white text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 font-medium hover:text-white text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
