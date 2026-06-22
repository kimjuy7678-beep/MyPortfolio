import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/Header'
import Hero from '../section/Hero'
import About from '../section/About'
import SKills from '../section/SKills'
import Projects from '../section/Projects'
import Footer from './components/Footer'
import DesignArchive from '../src/pages/DesignArchive'
import './App.css'

const HERO_ON_KEY = 'hero-is-on'

const getInitialIsOn = () => {
  return sessionStorage.getItem(HERO_ON_KEY) === 'true'
}

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
}

function App() {
  const [isOn, setIsOnState] = useState(getInitialIsOn);
  const [showTop, setShowTop] = useState(false);
  const location = useLocation();

  const setIsOn = (value: boolean) => {
    setIsOnState(value);
    sessionStorage.setItem(HERO_ON_KEY, value ? 'true' : 'false');
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`app-container ${isOn ? 'on' : 'off'}`}>
      <Header isOn={isOn} />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.main
              style={{ paddingTop: '100px' }}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <Hero isOn={isOn} setIsOn={setIsOn} />
              <About />
              <SKills />
              <Projects />
            </motion.main>
          } />
          <Route path="/design-archive" element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <DesignArchive />
            </motion.div>
          } />
        </Routes>
      </AnimatePresence>

      <Footer />

      {showTop && (
        <button className="scroll-top" onClick={scrollToTop}>↑</button>
      )}
    </div>
  )
}

export default App