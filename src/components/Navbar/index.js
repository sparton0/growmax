"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';
import mainLogo from '../../assets/main_logo.png';

const services = [
  {
    id: 1,
    title: "Distribution Contracts & Infrastructure Works",
    slug: "distribution-contracts"
  },
  {
    id: 2,
    title: "Grid-Connected Solar Projects",
    slug: "grid-connected-solar"
  },
  {
    id: 3,
    title: "Industrial & Commercial Electrical Installations",
    slug: "electrical-installations"
  },
  {
    id: 4,
    title: "Electrical Maintenance & Service Packages",
    slug: "maintenance-services"
  },
  {
    id: 5,
    title: "Site Survey & Electrical Consultation",
    slug: "site-survey-consultation"
  }
];

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src={mainLogo}
            alt="Growmax Engineers Logo"
            className={styles.logo}
            width={180}
            height={60}
            priority
          />
        </Link>

        <div className={styles.nav}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/about" className={styles.link}>About</Link>
          
          <div 
            className={styles.servicesDropdown}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <span className={styles.link}>Services</span>
            {isServicesOpen && (
              <div className={styles.dropdownContent}>
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className={styles.dropdownItem}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/products" className={styles.link}>Products</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
          
          <a 
            href="https://wa.me/919270020069" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.whatsapp}
          >
            <Image 
              src="/whatsapp.svg" 
              alt="WhatsApp" 
              width={24} 
              height={24} 
              className={styles.whatsappIcon}
            />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
