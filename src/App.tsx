import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import HomePage from '@/pages/Home'
import FindAHomePage from '@/pages/FindAHome'
import AboutPage from '@/pages/About'
import BuildersPage from '@/pages/Builders'
import LendersPage from '@/pages/Lenders'
import ServicesPage from '@/pages/Services'
import ContactPage from '@/pages/Contact'
import FinancingPage from '@/pages/Financing'
import FAQsPage from '@/pages/FAQs'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/find-a-home" element={<FindAHomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/about-us/builders" element={<BuildersPage />} />
          <Route path="/about-us/lenders" element={<LendersPage />} />
          <Route path="/about-us/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/financing" element={<FinancingPage />} />
          <Route path="/faqs" element={<FAQsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
