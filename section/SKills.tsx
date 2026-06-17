import { useEffect, useRef } from "react"
import { performance, techStack } from "../src/data/SkillData"
import '../src/scss/skill.scss'


const Skills = () => {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const bars = sectionRef.current?.querySelectorAll('.bar-fill')
        const perfItems = sectionRef.current?.querySelectorAll('.performance li')
        if (!bars || !perfItems) return

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 그래프
                    if (entry.target.classList.contains('bar-fill')) {
                        const bar = entry.target as HTMLElement
                        bar.style.width = bar.dataset.percent + '%'
                    }
                    // 우측 설명
                    if (entry.target.tagName === 'LI') {
                        entry.target.classList.add('visible')
                    }
                }
            })
        }, { threshold: 0.3 })

        bars.forEach(bar => observer.observe(bar))
        perfItems.forEach(item => observer.observe(item))
        return () => observer.disconnect()
    }, [])

    return (
        <section id="skills" className="skills" ref={sectionRef}>
            <h2>Skills <span>기술</span></h2>

            <div className="skill-wrap">
                {/* 좌측 그래프 */}
                <div className="stack">
                    <p className="label">ALL TECH STACK</p>
                    <ul>
                        {techStack.map((item, i) => (
                            <li key={i}>
                                <span className="tech-name">{item.name}</span>
                                <div className="bar-track">
                                    <div
                                        className="bar-fill"
                                        data-percent={item.percent}
                                    />
                                </div>
                                <span className="percent">{item.percent}%</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 우측 설명 */}
                <div className="performance">
                    <p className="label">PERFORMANCE</p>
                    <ul>
                        {performance.map((item, i) => (
                            <li key={i}>
                                <span className="num">{item.number}</span>
                                <h3>{item.title}</h3>
                                <p className="tags">{item.tags}</p>
                                <p className="desc">{item.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Skills