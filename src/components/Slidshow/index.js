import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import Image from 'next/image'
import slide1 from '@/assets/hoem page/1.png'
import slide2 from '@/assets/hoem page/2.jpg'
import slide3 from '@/assets/hoem page/3.png'
import slide4 from '@/assets/hoem page/4.png'
import slide5 from '@/assets/hoem page/5.jpg'
import slide6 from '@/assets/hoem page/6.jpg'

const slides = [
  {
    image: slide1,
    title: 'Electrical Contracting and Distribution Works',
    description: 'Licensed electrical works up to 33kV including new installations, maintenance, shifting, DTC erection, and 33kV/11kV/LT line electrification.',
  },
  {
    image: slide2,
    title: 'Grid-Connected Solar System',
    description: 'Expert services for rooftop solar under PM SURYAGHAR: MUFTI BIJLI YOJANA, as well as non-subsidized, commercial, and industrial solar installations.',
  },
  {
    image: slide3,
    title: 'Industrial and Commercial Electrical Installation',
    description: 'High-standard wiring installations using advanced technology and innovative concepts.',
  },
  {
    image: slide4,
    title: 'Electrical Maintenance and Service Packages',
    description: 'Our service packages are designed for hassle-free annual support. Customers can register under affordable yearly plans and receive professional service visits as per their package.',
  },
  {
    image: slide5,
    title: 'Site Survey & Electrical Consultation',
    description: 'Providing expert technical consultancy including project analysis, site surveys, compliance guidance, electricity queries, and electrical planning to ensure safe, efficient solutions and informed decision-making.',
  },
  {
    image: slide6,
    title: 'Products',
    description: 'We offer APFC panels, customized motor windings, advanced DC starters, and industrial power distribution panels with automation and safety features.',
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