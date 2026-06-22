import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { designData } from '../data/DesignData'
import '../scss/designarchive.scss'

const FADE_DURATION = 200

const DesignArchive = () => {
    const navigate = useNavigate()
    const [selectedItem, setSelectedItem] = useState<typeof designData[0] | null>(null)
    const [activeImgIndex, setActiveImgIndex] = useState(0)
    const [outgoingSrc, setOutgoingSrc] = useState<string | null>(null)
    const [fadingOut, setFadingOut] = useState(false)
    const [boxSize, setBoxSize] = useState<{ width: number; height: number } | null>(null)

    const openModal = (item: typeof designData[0]) => {
        setSelectedItem(item)
        setActiveImgIndex(0)
        setBoxSize(null)
    }

    const closeModal = () => {
        setSelectedItem(null)
        setBoxSize(null)
    }

    useEffect(() => {
        if (!selectedItem) return

        let loadedCount = 0
        let maxWidth = 0
        let maxHeight = 0
        const total = selectedItem.img.length

        selectedItem.img.forEach((src) => {
            const img = new Image()
            img.onload = () => {
                const maxBoxWidth = 600
                const maxBoxHeight = window.innerHeight * 0.7

                let displayWidth = img.naturalWidth
                let displayHeight = img.naturalHeight

                const widthRatio = maxBoxWidth / displayWidth
                const heightRatio = maxBoxHeight / displayHeight
                const ratio = Math.min(widthRatio, heightRatio, 1)

                displayWidth *= ratio
                displayHeight *= ratio

                if (displayWidth > maxWidth) maxWidth = displayWidth
                if (displayHeight > maxHeight) maxHeight = displayHeight

                loadedCount++
                if (loadedCount === total) {
                    setBoxSize({ width: maxWidth, height: maxHeight })
                }
            }
            img.src = src
        })
    }, [selectedItem])

    const changeImage = (newIndex: number) => {
        if (!selectedItem || newIndex === activeImgIndex) return

        const oldSrc = selectedItem.img[activeImgIndex]
        setActiveImgIndex(newIndex)
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

    const goPrev = () => {
        if (!selectedItem) return
        const newIndex =
            activeImgIndex === 0 ? selectedItem.img.length - 1 : activeImgIndex - 1
        changeImage(newIndex)
    }

    const goNext = () => {
        if (!selectedItem) return
        const newIndex =
            activeImgIndex === selectedItem.img.length - 1 ? 0 : activeImgIndex + 1
        changeImage(newIndex)
    }

    return (
        <div className="design-archive">
            <button type="button" className="back-btn" onClick={() => navigate(-1)}>
                ← 돌아가기
            </button>

            <h2>Design Archive <span>디자인 아카이브</span></h2>

            <div className="masonry-grid">
                {designData.map((item) => (
                    <div
                        key={item.id}
                        className="grid-item"
                        onClick={() => openModal(item)}
                    >
                        <div className="grid-item-inner">
                            <img src={item.img[0]} alt={item.title} loading="lazy" />
                            <div className="grid-item-overlay">
                                <span className="category">{item.category}</span>
                                <p className="title">{item.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedItem && (
                <div className="design-modal-backdrop" onClick={closeModal}>
                    <div
                        className="design-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="modal-close-btn"
                            onClick={closeModal}
                        >
                            ✕
                        </button>

                        <div
                            className="modal-image-wrap"
                            style={
                                boxSize
                                    ? { width: boxSize.width, height: boxSize.height }
                                    : undefined
                            }
                        >
                            {selectedItem.img.length > 1 && (
                                <button
                                    type="button"
                                    className="modal-arrow modal-arrow-left"
                                    onClick={goPrev}
                                >
                                    ‹
                                </button>
                            )}

                            <img
                                src={selectedItem.img[activeImgIndex]}
                                alt={selectedItem.title}
                                className="modal-img-base"
                            />

                            {outgoingSrc && (
                                <img
                                    src={outgoingSrc}
                                    alt=""
                                    className={`modal-fade-img ${fadingOut ? 'fade-out' : ''}`}
                                    style={{ transitionDuration: `${FADE_DURATION}ms` }}
                                    onTransitionEnd={handleFadeEnd}
                                />
                            )}

                            {selectedItem.img.length > 1 && (
                                <button
                                    type="button"
                                    className="modal-arrow modal-arrow-right"
                                    onClick={goNext}
                                >
                                    ›
                                </button>
                            )}

                            {selectedItem.img.length > 1 && (
                                <div className="modal-image-count">
                                    {activeImgIndex + 1} / {selectedItem.img.length}
                                </div>
                            )}
                        </div>
                        <div className="modal-info">
                            <span className="category">{selectedItem.category}</span>
                            <h3 className="title">{selectedItem.title}</h3>
                            <ul className="description-list">
                                {selectedItem.desc.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DesignArchive