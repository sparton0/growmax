import React from 'react'
import styles from './index.module.css'
import Image from 'next/image'
import serviceImage from '../../assets/white_text.jpg'
import hoverImage from '../../assets/background_black.jpg'

function OurServices() {
  return (
    <div className={styles.main}>
      <Image
        src={serviceImage}
        alt="Our Services"
        className={styles.image}
        priority
      />
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.subtitle}>CORE SERVICES</h3>
          <h2 className={styles.title}>Our Expertise</h2>
        </div>
        
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.iconContainer}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Distribution Contracts & Infrastructure Works</h3>
            <p>This core service covers comprehensive contracting solutions for power distribution infrastructure, executed with full regulatory compliance and technical precision.</p>
            <button className={styles.readMore}>Read More →</button>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.iconContainer}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Grid-Connected Solar Projects</h3>
            <p>We provide end-to-end EPC (Engineering, Procurement, and Construction) services for grid-connected solar systems, helping clients reduce energy costs and adopt clean, renewable power.</p>
            <button className={styles.readMore}>Read More →</button>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.iconContainer}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m4 0h2M3 7h18M8 11v8m8-8v8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Industrial & Commercial Electrical Installations</h3>
            <p>This service covers all types of structured electrical wiring and installations across residential, commercial, and industrial properties, with full compliance to safety and electrical standards.</p>
            <button className={styles.readMore}>Read More →</button>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.iconContainer}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Electrical Maintenance & Service Packages</h3>
            <p>Our service packages are designed for hassle-free annual support. Customers can register under affordable yearly plans and receive professional service visits as per their package—services are included, but materials or new installation work are charged separately.</p>
            <button className={styles.readMore}>Read More →</button>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.iconContainer}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Site Survey & Electrical Consultation</h3>
            <p>We offer paid, expert-level survey and consultation services to help residential, commercial, and industrial clients make informed, compliant, and technically sound decisions. Whether it's understanding billing issues, planning load distribution, addressing electrical faults, or exploring solar feasibility, our guidance ensures safety, efficiency, and legal clarity in every situation.</p>
            <button className={styles.readMore}>Read More →</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices