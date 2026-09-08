import { Route, Routes } from "react-router"
import "./App.css"
import Home from "./pages/Home"
import Navbar from "./components/layouts/Navbar"
import Footer from "./components/layouts/Footer"
import Services from "./pages/OurServices"
import Doctors from "./pages/Doctors"
import Faq from "./pages/Faq"
import Contact from "./pages/Contact"
import ScrollToTop from "./components/sections/ScrollToTop"
import { FloatingWhatsApp } from "react-floating-whatsapp"

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FloatingWhatsApp
        phoneNumber="9665XXXXXXXX"
        accountName="عيادة ..."
        avatar="/doctor.jpg"
        chatMessage="مرحباً 👋 كيف يمكننا مساعدتك؟"
        style={{ left: "30px", right: "auto" }}
        buttonStyle={{ left: "30px", right: "auto" }}
        chatboxStyle={{ left: "30px", right: "auto" }}
      />
      <Footer />
    </>
  )
}