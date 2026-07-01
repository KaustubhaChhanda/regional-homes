import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { ScrollToTop } from '../shared/ScrollToTop'
import { Chatbot } from '../shared/Chatbot'
import { cn } from '@/lib/utils'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsMobileOpen(false)
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full relative">
      <Navbar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
      <main className={cn("flex-1", !isHome && "pt-16 md:pt-20")}>
        {children}
      </main>
      <Footer />
      <ScrollToTop isMobileOpen={isMobileOpen} />
      <Chatbot />
    </div>
  )
}
