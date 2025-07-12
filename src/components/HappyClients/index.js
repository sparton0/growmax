import React from 'react';
import styles from './index.module.css';
import Image from 'next/image';
import profile1 from "../../assets/profile.png";
const testimonials = [
  {
    id: 1,
    name: "Mr. MAHESH GUNJAL",
    testimonial: "Very professional work. My rooftop solar system was installed quickly with full subsidy support. Highly satisfied!",
    image: "/images/client-placeholder.png"
  },
  {
    id: 2,
    name: "Mr. MIRZA ZAFAR",
    testimonial: "Excellent coordination and timely completion of our 11 kV line project. Team is skilled and well equipped.",
    image: "/images/client-placeholder.png"
  },
  {
    id: 3,
    name: "Mr. BHUSHAN AHER",
    testimonial: "GROWMAX handled everything from design to net metering. Smooth process and clean execution.",
    image: "/images/client-placeholder.png"
  },
  {
    id: 4,
    name: "Mr. IRFAN AHMED",
    testimonial: "Faced a high billing issue, but GROWMAX guided me with proper advice and helped file a complaint to utility. Got relief. Very helpful team!",
    image: "/images/client-placeholder.png"
  }
];

function HappyClients() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Happy Clients</h2>
        <div className={styles.decorativeLine}></div>
      </div>

      <div className={styles.testimonialGrid}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.testimonialCard}>
            <div className={styles.profileSection}>
              <div className={styles.imageWrapper}>
                <Image
                  src={profile1}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className={styles.profileImage}
                />
              </div>
              <h3 className={styles.clientName}>{testimonial.name}</h3>
            </div>
            <div className={styles.quoteIcon}>
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className={styles.testimonialText}>{testimonial.testimonial}</p>
          </div>
        ))}
      </div>

      <div className={styles.decorativeElements}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
      </div>
    </section>
  );
}

export default HappyClients;