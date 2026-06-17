import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from '../section/Hero'
import About from '../section/About'
import SKills from '../section/SKills'
import Projects from '../section/Projects'
import Footer from './components/Footer'
import DesignArchive from '../src/pages/DesignArchive'
import './App.css'

function App() {
  const [isOn, setIsOn] = useState(false);
  const [showTop, setShowTop] = useState(false);

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

      <Routes>
        <Route path="/" element={
          <main>
            <Hero isOn={isOn} setIsOn={setIsOn} />
            <About />
            <SKills />
            <Projects />
          </main>
        } />
        <Route path="/design-archive" element={<DesignArchive />} />
      </Routes>

      <Footer />

      {showTop && (
        <button className="scroll-top" onClick={scrollToTop}>↑</button>
      )}
    </div>
  )
}

export default App