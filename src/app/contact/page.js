'use client';
import styles from './page.module.css';
import Image from 'next/image';
import { FaWhatsapp, FaPhone, FaGlobe, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919270020069', '_blank');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Contact Us</h1>
        <p>Get in touch with our team</p>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.contactInfo}>
          <div className={styles.infoCard}>
            <div className={styles.infoItem}>
              <FaPhone className={styles.icon} />
              <div>
                <h3>Phone</h3>
                <p>+91 92700 20069</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <FaGlobe className={styles.icon} />
              <div>
                <h3>Website</h3>
                <p>www.growmaxengineers.com</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <FaEnvelope className={styles.icon} />
              <div>
                <h3>Email</h3>
                <p>info.growmax.power@gmail.com</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <FaMapMarkerAlt className={styles.icon} />
              <div>
                <h3>Registered Office</h3>
                <p>MHADA Plot No. 38,<br />
                   Noor Bag, Malegaon - 423203</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <FaMapMarkerAlt className={styles.icon} />
              <div>
                <h3>Branch Office</h3>
                <p>Plot No. 2, Devi ka malla,<br />
                   Behind Mandir, Daregaon, Malegaon<br />
                   423203</p>
              </div>
            </div>
          </div>

          <button 
            className={styles.whatsappButton}
            onClick={handleWhatsAppClick}
          >
            <FaWhatsapp className={styles.whatsappIcon} />
            Chat on WhatsApp
          </button>
        </div>

        <div className={styles.mapSection}>
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
        </div>
      </div>
    </div>
  );
} 