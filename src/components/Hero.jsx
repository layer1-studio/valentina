import { useEffect, useRef } from 'react'

const Hero = () => {
    const contentRef = useRef(null)

    useEffect(() => {
        // We can use the 'visible' class as in the original script.js
        const timer = setTimeout(() => {
            if (contentRef.current) {
                contentRef.current.classList.add('visible')
            }
        }, 2600) // Slightly after loader disappears
        return () => clearTimeout(timer)
    }, [])

    return (
        <header id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content" ref={contentRef}>
                <h2 className="animate-up">Timeless Elegance</h2>
                <h1 className="animate-up delay-1">The Essence of <br /><span>Luxury</span></h1>
                <p className="animate-up delay-2">Handcrafted jewellery designed to capture the beauty of your most cherished moments.</p>
                <a href="#collections" className="btn primary-btn animate-up delay-3">Explore Collections</a>
            </div>
            <div className="scroll-indicator">
                <div className="mouse"></div>
                <p>Scroll</p>
            </div>
        </header>
    )
}

export default Hero
