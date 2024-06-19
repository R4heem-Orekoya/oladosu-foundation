import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import Footer from "./components/Footer"
import Story from "./Pages/Story"
import ScrollToTop from "./components/ScrollToTop"
import Donate from "./Pages/Donate"
import { Toaster } from 'sonner'
import Contact from "./Pages/Contact"

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="w-[min(1400px,90%)] mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories/:id" element={<Story />} />
          <Route path="/donate" element={<Donate />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </main>
      <Toaster position="top-center" richColors/>
      <Footer />
    </>
  )
}

export default App
