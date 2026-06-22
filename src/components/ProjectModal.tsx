import { useState, useRef, useEffect } from 'react'
import '../scss/projectModal.scss'

const FADE_DURATION = 300

const ProjectModal = ({ project, onClose }: { project: any, onClose: () => void }) => {
    const [currentImg, setCurrentImg] = useState(0)
    const [outgoingSrc, setOutgoingSrc] = useState<string | null>(null)
    const [fadingOut, setFadingOut] = useState(false)
    const thumbRefs = useRef<(HTMLImageElement | null)[]>([])

    const changeImage = (index: number) => {
        if (index === currentImg) return

        const oldSrc = project.images?.[currentImg]
        setCurrentImg(index)
        setOutgoingSrc(oldSrc)
        setFadingOut(false)

        requestAnimationFrame(() => {
            requestAnimationFrame(() => setFadingOut(true))
        })
    }

    const handleFadeEnd = () => {
        setOutgoingSrc(null)
        setFadingOut(false)
    }

    useEffect(() => {
        const activeThumb = thumbRefs.current[currentImg]
        if (activeThumb) {
            activeThumb.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center',
            })
        }
    }, [currentImg])

    const imgCount = project.images?.length ?? 0

    const goPrev = () => {
        if (imgCount < 2) return
        const newIndex = currentImg === 0 ? imgCount - 1 : currentImg - 1
        changeImage(newIndex)
    }

    const goNext = () => {
        if (imgCount < 2) return
        const newIndex = currentImg === imgCount - 1 ? 0 : currentImg + 1
        changeImage(newIndex)
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>✕</button>

                <div className="modal-left">
                    <div className="modal-img-main">
                        {imgCount > 1 && (
                            <button
                                type="button"
                                className="modal-img-arrow modal-img-arrow-left"
                                onClick={goPrev}
                            >
                                ‹
                            </button>
                        )}

                        <img
                            src={project.images?.[currentImg]}
                            alt="project"
                            className="modal-img-base"
                        />

                        {outgoingSrc && (
                            <img
                                src={outgoingSrc}
                                alt=""
                                className={`modal-img-fade ${fadingOut ? 'fade-out' : ''}`}
                                style={{ transitionDuration: `${FADE_DURATION}ms` }}
                                onTransitionEnd={handleFadeEnd}
                            />
                        )}

                        {imgCount > 1 && (
                            <button
                                type="button"
                                className="modal-img-arrow modal-img-arrow-right"
                                onClick={goNext}
                            >
                                ›
                            </button>
                        )}

                        {imgCount > 1 && (
                            <div className="modal-img-count">
                                {currentImg + 1} / {imgCount}
                            </div>
                        )}
                    </div>
                    <div className="modal-img-thumbs">
                        {project.images?.map((img: string, i: number) => (
                            <img
                                key={i}
                                ref={(el) => { thumbRefs.current[i] = el }}
                                src={img}
                                alt={`thumb-${i}`}
                                className={currentImg === i ? 'active' : ''}
                                onClick={() => changeImage(i)}
                            />
                        ))}
                    </div>
                </div>

                <div className="modal-right">
                    <span className="modal-num">0{project.id}</span>
                    <h3>{project.title}</h3>
                    <p className="modal-date">{project.date}</p>

                    <div className="modal-info">
                        <div>
                            <span className="label">기여도</span>
                            <span>{project.contribution}</span>
                        </div>
                        <div>
                            <span className="label">역할</span>
                            <span>{project.role}</span>
                        </div>
                    </div>

                    <ul className="modal-desc">
                        {Array.isArray(project.desc)
                            ? project.desc.map((item: string, i: number) => (
                                <li key={i}>{item}</li>
                            ))
                            : <li>{project.desc}</li>
                        }
                    </ul>

                    {project.pages && (
                        <div className="modal-pages">
                            <span className="label">담당 페이지</span>
                            <ul>
                                {project.pages.map((page: string, i: number) => (
                                    <li key={i}>{page}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <ul className="modal-tags">
                        {project.tags.map((tag: string) => (
                            <li key={tag}>{tag}</li>
                        ))}
                    </ul>

                    <div className="modal-links">
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noreferrer">
                                VIEW SITE →
                            </a>
                        )}
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noreferrer">
                                GITHUB →
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal