'use client';

import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import founderImage from '@/assets/profile.png';

export default function About() {
  return (
    <div className={styles.container}>
      {/* Founder Section */}
      <section className={styles.founderSection}>
        <div className={styles.founderCard}>
          <div className={styles.imageWrapper}>
            <Image
              src={founderImage}
              alt="Shahezad Ahmed Shakeel Ahmed"
              width={200}
              height={200}
              className={styles.founderImage}
              priority
            />
          </div>
          <div className={styles.founderInfo}>
            <h1>Founder and Director</h1>
            <h2>SHAHEZAD AHMED SHAKEEL AHMED</h2>
            <p className={styles.qualification}>B.E (ELECTRICAL) D.E.E</p>
          </div>
        </div>

        <div className={styles.founderBio}>
          <p>
            Meet the visionary behind GROWMAX ENGINEERS, Shahezad Ahmed S/o Shakeel Ahmed, 
            our esteemed founder and proprietor. A graduate in Electrical Engineering (B.E. Pune 
            University), after doing Diploma in same stream. Shahezad brings a strong combination of 
            academic knowledge and hands-on field experience, known for his disciplined work ethic, 
            technical clarity, and leadership. He has built his career through years of involvement in 
            electrical infrastructure projects—ranging from substation operations and line erection to 
            transformer systems and utility coordination. With a calm personality, deep understanding 
            of ground realities, project execution, and regulatory processes have been key in shaping 
            GROWMAX ENGINEERS into a trusted name in the electrical contracting industry. Under 
            his guidance, the company stands for reliability, precision, and a commitment to service 
            excellence.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className={styles.experienceSection}>
        <h2 className={styles.sectionTitle}>Professional Experience</h2>
        
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3>2020 - 2023</h3>
              <p>Worked with Hindustan Engineering Corporation, a vendor of Malegaon Power Supply Limited, where he got extensive experience in power distribution systems, substation operations, and utility coordination.</p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3>2018 - 2020</h3>
              <p>Served as an Engineer at Perin Electrical Pvt. Ltd., contractor for Samsung CPT (India) Pvt. Ltd., contributing to the prestigious DMICDC project for Reliance Industries Limited in BKC, Mumbai.</p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3>2017 - 2018</h3>
              <p>His professional journey began with Perin Engineers as a Supervisor, and during this time he established GROWMAX ENGINEERS, where he progressively led and executed electrical infrastructure projects since his own banner.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className={styles.valuesSection}>
        <h2 className={styles.sectionTitle}>Our Core Values</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <h3>Excellence</h3>
            <p>Commitment to delivering the highest quality electrical solutions</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Integrity</h3>
            <p>Maintaining transparency and ethical practices in all operations</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Innovation</h3>
            <p>Embracing modern technologies and innovative solutions</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Reliability</h3>
            <p>Consistent delivery of dependable services and support</p>
          </div>
        </div>
      </section>
    </div>
  );
}