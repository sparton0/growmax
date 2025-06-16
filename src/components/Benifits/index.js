import React from 'react'
import styles from './index.module.css'
import Image from 'next/image'

function Benifits() {
  return (
    <section className={styles.benefitsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Benefits of Solar Energy</h2>
        
        <div className={styles.benefitsLayout}>
          {/* Left Side Benefits */}
          <div className={styles.leftBenefits}>
            <div className={styles.benefitCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.benefitContent}>
                <h3>Cost Savings</h3>
                <p>Reduce electricity bills and earn tax incentives while increasing property value.</p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.benefitContent}>
                <h3>Energy Independence</h3>
                <p>Generate your own clean electricity and reduce dependency on the grid.</p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.benefitContent}>
                <h3>Environmental Impact</h3>
                <p>Reduce carbon footprint and contribute to a sustainable future.</p>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className={styles.centerImage}>
            <Image 
              src={require('../../assets/solar-benefits.jpg')} 
              alt="Solar Benefits"
              className={styles.image}
              priority
            />
          </div>

          {/* Right Side Benefits */}
          <div className={styles.rightBenefits}>
            <div className={styles.benefitCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.benefitContent}>
                <h3>Low Maintenance</h3>
                <p>Minimal upkeep required with long-lasting, durable solar panels.</p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.benefitContent}>
                <h3>Reliable Power</h3>
                <p>Consistent energy production during daylight hours with battery storage options.</p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.benefitContent}>
                <h3>Modern Technology</h3>
                <p>Advanced solar solutions with smart monitoring and optimization.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benifits