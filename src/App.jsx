import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import SystemDesign from './components/SystemDesign'
import BeforeAfter from './components/BeforeAfter'
import Improvements from './components/Improvements'
import Process from './components/Process'
import DesktopScreens from './components/DesktopScreens'
import MobileScreens from './components/MobileScreens'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-dark-900 text-white min-h-screen overflow-x-hidden font-sans">
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <SystemDesign />
        <BeforeAfter />
        <Improvements />
        <Process />
        <DesktopScreens />
        <MobileScreens />
      </main>
      <Footer />
    </div>
  )
}
