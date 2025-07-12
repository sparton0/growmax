import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import Image from 'next/image'
import slide1 from '@/assets/slide1.jpg'
import slide2 from '@/assets/slide2.jpg'
import slide3 from '@/assets/slide3.jpg'
import slide4 from '@/assets/slide4.jpg'
import slide5 from '@/assets/slide5.jpg'
import slide6 from '@/assets/slide6.jpg'

const slides = [
  {
    image: slide1,
    title: 'Leading Electrical Solutions Provider',
    description: 'Expert electrical services for residential, commercial, and industrial needs',
  },
  {
    image: slide2,
    title: 'Solar Power Excellence',
    description: 'Custom solar installations with state-of-the-art technology and professional expertise',
  },
  {
    image: slide3,
    title: 'Infrastructure & Maintenance',
    description: 'Comprehensive electrical infrastructure development and maintenance services',
  },
  {
    image: slide4,
    title: 'Energy Efficiency Solutions',
    description: 'Smart energy management systems for optimal power consumption and cost savings',
  },
  {
    image: slide5,
    title: 'Industrial Power Solutions',
    description: 'Specialized electrical services for factories, manufacturing units, and industrial complexes',
  },
  {
    image: slide6,
    title: 'Renewable Energy Future',
    description: 'Sustainable power solutions for a greener and more energy-efficient tomorrow',
  },  
]

function SlideShow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    setCurrentSlide(0)
    console.log('SlideShow mounted, total slides:', slides.length)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        const nextSlide = prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        console.log('Changing to slide:', nextSlide)
        return nextSlide
      })
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
              priority={index === 0 || index === currentSlide}
              quality={90}
              sizes="100vw"
            />
            <div className={styles.slideText}>
              <h1 className={styles.title}>{slide.title}</h1>
              <p className={styles.description}>{slide.description}</p>
              {/* <button className={styles.cta}>Get Started</button> */}
            </div>
          </div>
        </div>
      ))}
      <div className={`${styles.dots} ${isMounted ? styles.dotsVisible : ''}`}>
        {slides.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => {
              console.log('Manual navigation to slide:', index)
              setCurrentSlide(index)
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default SlideShow