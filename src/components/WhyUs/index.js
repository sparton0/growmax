import React from 'react'
import styles from './index.module.css'
import Image from 'next/image'

function WhyUs() {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <Image 
            src={require('../../assets/team-meeting.jpg')} 
            alt="Why Choose Us" 
            className={styles.image}
            priority
          />
        </div>
        
        <div className={styles.contentSection}>
          <h3 className={styles.subtitle}>Why Choose Us</h3>
          <h2 className={styles.title}>
            Some Of Reason For Choose Our <span className={styles.highlight}>Solar Solutions</span>
          </h2>
          
          <p className={styles.description}>
            Transform your energy future with our innovative solar solutions. We combine cutting-edge technology with expert installation to deliver reliable, sustainable power systems for homes and businesses.
          </p>

          <div className={styles.reasonsGrid}>
            <div className={styles.reasonCard}>
              <div className={styles.reasonIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4>Expert Installation</h4>
              <p>Professional certified team ensuring quality setup and performance</p>
            </div>

            <div className={styles.reasonCard}>
              <div className={styles.reasonIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4>Cost Savings</h4>
              <p>Significant reduction in energy bills and attractive tax incentives</p>
            </div>

            <div className={styles.reasonCard}>
              <div className={styles.reasonIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4>Quality Guarantee</h4>
              <p>Premium equipment with extended warranties and reliable performance</p>
            </div>

            <div className={styles.reasonCard}>
              <div className={styles.reasonIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4>24/7 Support</h4>
              <p>Round-the-clock customer service and technical assistance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs