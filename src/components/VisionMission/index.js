import React from 'react';
import styles from './index.module.css';
import Image from 'next/image';
import visionMissionImage from '@/assets/vision_mission.png';

function VisionMission() {
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <Image 
          src={visionMissionImage} 
          alt="Vision and Mission" 
          className={styles.visionMissionImage}
          priority
        />
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.visionSection}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              <span className={styles.highlightText}>VISION</span>
            </h2>
            <p className={styles.description}>
              To become the leading company in electrical contracting and solar EPC services—where anyone seeking reliable electrical solutions thinks first of GROWMAX ENGINEERS. We strive to be known for quality, trust, and a service-first approach that powers progress for homes, businesses, and communities.
            </p>
            <div className={styles.decorativeLine}></div>
          </div>
        </div>

        <div className={styles.missionSection}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              <span className={styles.highlightText}>MISSION</span>
            </h2>
            <p className={styles.description}>
              To provide easy, reliable, and affordable solutions for all types of electrical and solar energy needs. At GROWMAX ENGINEERS, we help consumers move away from costly energy bills by switching to solar power, and we offer support for everything from major infrastructure projects to the smallest electrical problems. Our goal is to reduce technical challenges, raise awareness, and ensure every customer receives clear guidance and complete solutions with honesty and care.
            </p>
            <div className={styles.decorativeLine}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;