import React from 'react'
import styles from './index.module.css'
import Image from 'next/image'
import Link from 'next/link'
import addressBack from '../../assets/address_back.jpg'
import mainLogo from '../../assets/white.png'
function Address() {
  return (
    <footer className={styles.footer}>
      

      {/* Main Footer */}
      <div className={styles.mainFooter}>
        <div className={styles.footerContent}>
          {/* Address Section */}
          <div className={styles.section}>
            <h3>Address</h3>
            <div className={styles.addressItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>MHADA Plot No. 38, Noor Bag, Malegaon - 423203</p>
            </div>
            <div className={styles.addressItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Plot No. 2, Devi ka malla, Behind Mandir, Daregaon, Malegaon 423203</p>
            </div>
            <div className={styles.addressItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="mailto:info.growmaxengineers@gmail.com">info.growmaxengineers@gmail.com</a>
            </div>
            <div className={styles.addressItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="tel:+919270020069">+91 92700 20069</a>
            </div>
            <div className={styles.addressItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="https://www.growmaxengineers.com" target="_blank" rel="noopener noreferrer">www.growmaxengineers.com</a>
            </div>
          </div>

          {/* Map Section */}
          <div className={styles.mapSection}>
            <h3>Our Location</h3>
            <div className={styles.mapWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.8155!2d74.5297!3d20.5595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDMzJzM0LjIiTiA3NMKwMzEnNDYuOSJF!5e0!3m2!1sen!2sin!4v1624451234567!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className={styles.mapInfo}>
              <p>Find us easily in Malegaon</p>
              <a 
                href="https://www.google.com/maps/search/MHADA+Plot+No.+38,+Noor+Bag,+Malegaon" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.mapLink}
              >
                View on Google Maps
              </a>
            </div>
          </div>

          {/* Our Solutions Section */}
          {/* <div className={styles.section}>
            <h3>Our Solutions</h3>
            <div className={styles.solutionsList}>
              <div className={styles.solutionsColumn}>
                <Link href="#">Residential Solar</Link>
                <Link href="#">Commercial Solar</Link>
                <Link href="#">Solar Design</Link>
                <Link href="#">Energy Storage</Link>
              </div>
              <div className={styles.solutionsColumn}>
                <Link href="#">Solar Maintenance</Link>
                <Link href="#">Solar Monitoring</Link>
                <Link href="#">EV Charging</Link>
                <Link href="#">Energy Consulting</Link>
              </div>
            </div>
          </div> */}

          {/* Resources Section */}
          {/* <div className={styles.section}>
            <h3>Resources</h3>
            <Link href="#">Solar Calculator</Link>
            <Link href="#">Solar Incentives</Link>
            <Link href="#">Energy Savings Guide</Link>
            <Link href="#">Careers</Link>
          </div> */}
        </div>

        {/* Copyright Section */}
        <div className={styles.copyright}>
          <div className={styles.copyrightContent}>
            <Image 
              src={mainLogo}
              alt="GROWMAX ENGINEERS"
              width={120}
              height={40}
            />
            <p>©Copyright 2024 GROWMAX ENGINEERS | All Rights Reserved</p>
            {/* <Image 
              src={require('../../assets/dmca.png')}
              alt="DMCA Protected"
              width={100}
              height={30}
            /> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Address