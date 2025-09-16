import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ServicePage from './pages/ServicePage'
import AnnouncementsPage from './pages/AnnouncementsPage'
import SupportPage from './pages/SupportPage'
import AdvertisingPage from './pages/AdvertisingPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/announcements" element={<AnnouncementsPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/advertising" element={<AdvertisingPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
