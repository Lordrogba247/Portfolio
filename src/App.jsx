import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './port/Navbar/Navbar.jsx'
import About from './port/About/About.jsx'
import Portfolio from './port/Portfolio/Portfolio.jsx'
import Skills from './port/Skills/Skills.jsx'
import Contact from './port/Contact/Contact.jsx'
import Footer from './port/Footer/Footer.jsx'
import './App.css'

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

// Animated Routes wrapper
function AnimatedRoutes() {
  const location = useLocation()

  return (
    <div key={location.pathname} className="page-transition">
      <Routes location={location}>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  )
}

export default App