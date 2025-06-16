import React from 'react'
import styles from './index.module.css'
import Image from 'next/image'
import about from '../../assets/about.jpg'

function AboutUs() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h3 className={styles.subtitle}>INTRODUCTION</h3>
          <h2 className={styles.title}>ABOUT <span className={styles.highlight}>US</span></h2>
          
          <p className={styles.description}>
            Founded in 2017 and formerly known as SF Infratech Electrical Company, GROWMAX ENGINEERS was officially registered under its current name in 2023. It is a professionally managed Solar EPC, Electrical Contracting, and Consulting firm established by <span className={styles.highlight}>SHAHEZAD AHMED SHAKEEL AHMED</span>, a graduate in Electrical Engineering (B.E).
          </p>

          <p className={styles.description}>
            Head Office in Malegaon-423203, Maharashtra, the company is a registered with the following credentials:
          </p>

          <div className={styles.credentialsList}>
            <div className={styles.credentialItem}>
              <span className={styles.credentialLabel}>GSTIN:</span>
              27IVDPS4432J1Z4
            </div>
            <div className={styles.credentialItem}>
              <span className={styles.credentialLabel}>Electrical Contractor License No.:</span>
              220520233253100618
            </div>
            <div className={styles.credentialItem}>
              <span className={styles.credentialLabel}>Supervisor License No.:</span>
              170320233251100906
            </div>
          </div>

          <div className={styles.valuesList}>
            <div className={styles.valueItem}>
              <span className={styles.valueIcon}>→</span>
              Solar EPC Solutions
            </div>
            <div className={styles.valueItem}>
              <span className={styles.valueIcon}>→</span>
              Electrical Contracting
            </div>
            <div className={styles.valueItem}>
              <span className={styles.valueIcon}>→</span>
              Professional Consulting
            </div>
            <div className={styles.valueItem}>
              <span className={styles.valueIcon}>→</span>
              Expert Installation
            </div>
          </div>

          <p className={styles.description}>
            Listed on National Portal: <a href="https://www.mahadiscom.in/fsmart/empanelled_agencies_national_portal.php" target="_blank" rel="noopener noreferrer" className={styles.portalLink}>www.mahadiscom.in/fsmart/empanelled_agencies_national_portal.php</a>
          </p>
        </div>

        <div className={styles.imageContainer}>
          <Image 
            src={about} 
            alt="About GrowMax Engineers" 
            className={styles.image}
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default AboutUs