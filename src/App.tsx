import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Services from './pages/OurServices'
import Doctors from './pages/Doctors'
import Faq from './pages/Faq'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}