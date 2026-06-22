import { useEffect, useRef, useState } from 'react'
import { projectData } from '../src/data/ProjectData'
import { ProjectCard, DesignCard } from '../src/components/ProjectCard'
import ProjectModal from '../src/components/ProjectModal'
import '../src/scss/project.scss'

const Projects = () => {
    const sliderRef = useRef<HTMLDivElement>(null)
    const [selectedProject, setSelectedProject] = useState<any>(null)

    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(false)

    const updateArrows = () => {
        const el = sliderRef.current
        if (!el) return

        const { scrollLeft, scrollWidth, clientWidth } = el

        const hasOverflow = scrollWidth > clientWidth + 1

        setCanScrollLeft(hasOverflow && scrollLeft > 0)
        setCanScrollRight(hasOverflow && scrollLeft + clientWidth < scrollWidth - 1)
    }

    useEffect(() => {
        const el = sliderRef.current
        if (!el) return

        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual'
        }
        el.scrollLeft = 0

        const raf1 = requestAnimationFrame(() => {
            el.scrollLeft = 0
            const raf2 = requestAnimationFrame(updateArrows)
                ; (el as any)._raf2 = raf2
        })

        const onLoad = () => {
            if (el.scrollLeft < 5) el.scrollLeft = 0
            updateArrows()
        }
        window.addEventListener('load', onLoad)

        el.addEventListener('scroll', updateArrows)

        window.addEventListener('resize', updateArrows)

        const resizeObserver = new ResizeObserver(updateArrows)
        resizeObserver.observe(el)

        return () => {
            cancelAnimationFrame(raf1)
            if ((el as any)._raf2) cancelAnimationFrame((el as any)._raf2)
            window.removeEventListener('load', onLoad)
            el.removeEventListener('scroll', updateArrows)
            window.removeEventListener('resize', updateArrows)
            resizeObserver.disconnect()
        }
    }, [])

    const scroll = (dir: 'left' | 'right') => {
        if (!sliderRef.current) return
        sliderRef.current.scrollBy({ left: dir === 'right' ? 360 : -360, behavior: 'smooth' })
    }

    useEffect(() => {
        const el = sliderRef.current
        if (!el) return

        let isDown = false
        let didDrag = false
        let startX = 0
        let scrollStart = 0

        const onMouseDown = (e: MouseEvent) => {
            isDown = true
            didDrag = false
            startX = e.pageX
            scrollStart = el.scrollLeft
        }

        const onMouseMove = (e: MouseEvent) => {
            if (!isDown) return
            const delta = e.pageX - startX
            if (Math.abs(delta) > 5 && !didDrag) {
                didDrag = true
                el.classList.add('dragging')
            }
            if (!didDrag) return
            e.preventDefault()
            el.scrollLeft = scrollStart - delta
        }

        const endDrag = () => {
            isDown = false
            el.classList.remove('dragging')
        }

        const onClickCapture = (e: MouseEvent) => {
            if (didDrag) {
                e.preventDefault()
                e.stopPropagation()
                didDrag = false
            }
        }

        el.addEventListener('mousedown', onMouseDown)
        window.addEventListener('mousemove', onMouseMove)
        window.addEventListener('mouseup', endDrag)
        el.addEventListener('click', onClickCapture, true)

        return () => {
            el.removeEventListener('mousedown', onMouseDown)
            window.removeEventListener('mousemove', onMouseMove)
            window.removeEventListener('mouseup', endDrag)
            el.removeEventListener('click', onClickCapture, true)
        }
    }, [])

    return (
        <section id="projects" className="projects">
            <h2>Projects <span>프로젝트</span></h2>

            <div className="slider-container">
                <div className="slider-wrap" ref={sliderRef}>
                    {projectData.academy.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i}
                            onClick={() => setSelectedProject(project)} />
                    ))}
                    {projectData.company.map((project, i) => (
                        <ProjectCard key={project.id} project={project}
                            index={projectData.academy.length + i}
                            onClick={() => setSelectedProject(project)} />
                    ))}
                    <DesignCard />
                </div>
            </div>

            <div className={`slide-fade fade-left ${canScrollLeft ? 'visible' : ''}`} />
            <div className={`slide-fade fade-right ${canScrollRight ? 'visible' : ''}`} />

            {canScrollLeft && (
                <button
                    type="button"
                    className="slide-btn btn-left"
                    aria-label="이전 프로젝트"
                    onClick={() => scroll('left')}
                >
                    ←
                </button>
            )}

            {canScrollRight && (
                <button
                    type="button"
                    className="slide-btn btn-right"
                    aria-label="다음 프로젝트"
                    onClick={() => scroll('right')}
                >
                    →
                </button>
            )}

            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </section>
    )
}

export default Projects