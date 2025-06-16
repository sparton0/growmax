import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import Image from 'next/image'
const slides = [
  {
    image: '/images/slide1.jpg',
    title: 'Powering the Future with Solar Energy',
    description: 'Sustainable solutions for a brighter tomorrow with cutting-edge solar technology',
  },
  {
    image: '/images/slide2.jpg',
    title: 'Smart Solar Solutions',
    description: 'Innovative solar systems designed for maximum efficiency and reliability',
  },
  {
    image: '/images/slide3.jpg',
    title: 'Go Green with Solar',
    description: 'Reduce your carbon footprint while saving on energy costs',
  },
]


function SlideShow() {
     const [currentSlide, setCurrentSlide] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    setCurrentSlide(0)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [isMounted])

  return (
    <div className={styles.slideshow}>
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`${styles.slide} ${!isMounted ? styles.initial : ''} ${index === currentSlide ? styles.active : ''}`}
          >
            <div className={styles.slideContent}>
              <div className={styles.overlay} />
              <Image
                src={slide.image}
                alt={slide.title}
                className={styles.slideImage}
                fill
                priority={index === 0}
                quality={100}
              />
              <div className={styles.slideText}>
                <h1 className={styles.title}>{slide.title}</h1>
                <p className={styles.description}>{slide.description}</p>
                <button className={styles.cta}>Get Started</button>
              </div>
            </div>
          </div>
        ))}
        <div className={`${styles.dots} ${isMounted ? styles.dotsVisible : ''}`}>
          {slides.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
  )
}

export default SlideShow