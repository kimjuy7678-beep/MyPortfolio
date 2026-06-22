import { useState, useEffect, useRef } from 'react'
import Profile from '../src/components/Profile'
import Keywords from '../src/components/Keywords'
import Education from '../src/components/Education'
import Work from '../src/components/Work'
import '../src/scss/about.scss'
import Certificate from '../src/components/Certificate'

const About = () => {
    const [panel, setPanel] = useState<'intro' | 'detail'>('intro')
    const introRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const items = introRef.current?.querySelectorAll('.scroll-item')
        if (!items) return

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                }
            })
        }, { threshold: 0.1 })

        items.forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (panel !== 'detail') return
        const items = document.querySelectorAll('.panel-detail .item')
        items.forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 100)
        })
    }, [panel])

    useEffect(() => {
        const isMobile = window.matchMedia('(max-width: 1024px)').matches
        if (!isMobile) return

        const items = document.querySelectorAll('.panel-detail .item')
        items.forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 80)
        })
    }, [])

    return (
        <section id="about" className='About'>
            <h2>About <span>소개</span></h2>

            <button className="arrow-btn" onClick={() => setPanel(p => p === 'intro' ? 'detail' : 'intro')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d={panel === 'intro' ? "M5 12h14M13 6l6 6-6 6" : "M19 12H5M11 6L5 12l6 6"} />
                </svg>
            </button>

            <div className="left">
                <Profile />
            </div>

            <div className="right">
                <div ref={introRef} className={`panel panel-intro ${panel === 'intro' ? 'active' : 'exit'}`}>
                    <Profile isText />
                    <Keywords />
                </div>

                <div className={`panel panel-detail ${panel === 'detail' ? 'active' : ''}`}>
                    <div className="row-top">
                        <div className="col">
                            <Education />
                        </div>
                        <div className="col">
                            <Work />
                        </div>
                    </div>
                    <div className="row-bottom">
                        <Certificate />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About