import React from 'react'
import styles from './index.module.css'

function Stats() {
  return (
    <section className={styles.statsSection}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>1000</h2>
          <p className={styles.statTitle}>PROJECT DONE</p>
        </div>
        
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>750+</h2>
          <p className={styles.statTitle}>HAPPY CLIENTS</p>
        </div>
        
        {/* <div className={styles.statItem}>
          <h2 className={styles.statNumber}>30+</h2>
          <p className={styles.statTitle}>AWARD WINING</p>
        </div> */}
        
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>100%</h2>
          <p className={styles.statTitle}>SATISFACTION RATE</p>
        </div>
      </div>
    </section>
  )
}

export default Stats 