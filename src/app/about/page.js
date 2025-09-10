'use client';

import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import founderImage from '@/assets/profile.png';

export default function About() {
  return (
    <div className={styles.container}>
      {/* Company Information Section */}
      <section className={styles.companyInfoSection}>
        <h1 className={styles.mainTitle}>ABOUT <span className={styles.highlight}>US</span></h1>
        
        <div className={styles.companyDescription}>
          <p>
            Founded in 2017 and formerly known as SF Infratech Electrical Company, GROWMAX ENGINEERS was officially registered under its current name in 2023. It is a professionally managed Solar EPC, Electrical Contracting, and Consulting firm established by <span className={styles.founderName}>SHAHEZAD AHMED SHAKEEL AHMED</span>, a graduate in Electrical Engineering (B.E).
          </p>
          
          <p>
            Head Office in Malegaon-423203, Maharashtra, the company is registered with the following credentials:
          </p>
        </div>

        <div className={styles.credentialsBox}>
          <div className={styles.credentialItem}>
            <span className={styles.credentialLabel}>GSTIN:</span>
            <span className={styles.credentialValue}>27IVDPS4432J1Z4</span>
          </div>
          <div className={styles.credentialItem}>
            <span className={styles.credentialLabel}>Electrical Contractor License No.:</span>
            <span className={styles.credentialValue}>220520233253100618</span>
          </div>
          <div className={styles.credentialItem}>
            <span className={styles.credentialLabel}>Supervisor License No.:</span>
            <span className={styles.credentialValue}>17032023**********</span>
          </div>
        </div>

        <div className={styles.portalLink}>
          <p>Listed on National Portal: <a href="https://www.mahadiscom.in/fsmart/empanelled_agencies_national_portal.php" target="_blank" rel="noopener noreferrer">www.mahadiscom.in/fsmart/empanelled_agencies_national_portal.php</a></p>
        </div>
      </section>

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

      {/* Team Section */}
      <section className={styles.teamSection}>
        <h2 className={styles.sectionTitle}>Our Team of Experts & Excellent</h2>
        
        <div className={styles.teamGrid}>
          {/* Left Column */}
          <div className={styles.teamColumn}>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <div className={styles.placeholderImage}></div>
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberRole}>Law Expert</h3>
                <h4 className={styles.memberName}>Mr. SHAKEEL AHMED</h4>
                <p className={styles.memberQualification}>L.L.M., L. L. B., B.Sc., B.Ed., D.L.L. & L.W.</p>
                <p className={styles.memberDescription}>
                  Described as a Legal Adviser at GROWMAX ENGINEERS and the user's father. He holds a distinguished educational portfolio and possesses an impressive 43 years of experience. He navigates legal complexities, embodies integrity and commitment, and his legal acumen and paternal influence contribute to a legacy of excellence spanning over three decades.
                </p>
              </div>
            </div>

            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <div className={styles.placeholderImage}></div>
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberRole}>Legal Advisor</h3>
                <h4 className={styles.memberName}>Adv. AFZAL NAWAZ</h4>
                <p className={styles.memberQualification}>L.L.B., B. Com.</p>
                <p className={styles.memberDescription}>
                  Introduced as the legal luminary shaping GROWMAX ENGINEERS. With a background in legislative law (LLB) and commerce, he offers a distinctive perspective. He boasts a decade of expertise cultivated in the Bombay High Court, serving as a pillar of wisdom for legal strategies. His 10 years of experience in the Bombay High Court ensures strategic and insightful legal counsel.
                </p>
              </div>
            </div>

            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <div className={styles.placeholderImage}></div>
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberRole}>R&D Head</h3>
                <h4 className={styles.memberName}>JAMEEL AHMED</h4>
                <p className={styles.memberQualification}>B.E. (Chemical)</p>
                <p className={styles.memberDescription}>
                  A vital asset at GROWMAX ENGINEERS, holding a Bachelor's degree in Chemical Engineering. He leads the Research & Development division with 9 years of experience. His expertise lies at the intersection of chemical engineering and technical innovation, ensuring progressive solutions and service excellence. His leadership in R&D drives the pursuit of advanced, efficient, and future-ready engineering solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.teamColumn}>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <div className={styles.placeholderImage}></div>
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberRole}>Project Head</h3>
                <h4 className={styles.memberName}>MAHMOOD AHMED</h4>
                <p className={styles.memberQualification}>B.E. (Civil)</p>
                <p className={styles.memberDescription}>
                  A driving force at GROWMAX ENGINEERS, holding a Bachelor's degree in Civil Engineering. He serves as an experienced Project Head with an impressive 17 years of experience, ensuring seamless execution and oversight of diverse projects. He brings a unique blend of education and hands-on experience, having worked in Mumbai, Delhi, and Muscat with national and international organizations, handling turnovers in the hundreds and thousands of crores. His deep knowledge and extensive project leadership elevate operations to new heights.
                </p>
              </div>
            </div>

            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <div className={styles.placeholderImage}></div>
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberRole}>Technical Advisor</h3>
                <h4 className={styles.memberName}>MOMIN SHAHBAZ</h4>
                <p className={styles.memberQualification}>Ph.D. (Electrical)</p>
                <p className={styles.memberDescription}>
                  The powerhouse behind GROWMAX ENGINEERS, with a Bachelor's degree in Electrical Engineering, a Master's in Electrical Power Systems, and currently pursuing a Ph.D. in Electrical and Electronics Engineering. He is an adept Technical Support with 5 years of invaluable experience in the educational sector. He brings a unique blend of academic prowess and practical insight, transforming technical support into a beacon of innovation and knowledge.
                </p>
              </div>
            </div>

            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <div className={styles.placeholderImage}></div>
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberRole}>Account and Finance</h3>
                <h4 className={styles.memberName}>ARSHAD AHMED</h4>
                <p className={styles.memberQualification}>B. Com.</p>
                <p className={styles.memberDescription}>
                  The financial maestro at GROWMAX ENGINEERS, holding a Bachelor's degree in Commerce. He oversees accounting and finance operations with an impressive 18 years of experience. He brings a wealth of financial acumen, skill, and talent. His extensive experience ensures meticulous financial management and strategic financial planning for the company's endeavors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}