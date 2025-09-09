'use client';

import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import service1 from '@/assets/1p.png';
import service2 from '@/assets/2p.png';
import service3 from '@/assets/3p.jpg';
import service4 from '@/assets/4p.jpg';
import { useRouter } from 'next/navigation';

const products = [
  {
    id: 1,
    name: 'APFC Panel',
    image: service1,
    description: 'Advanced Power Factor Correction panels for optimal electrical efficiency.',
    features: [
      'Automatic power factor correction',
      'Real-time monitoring system',
      'Energy savings up to 30%',
      'Smart load management'
    ]
  },
  {
    id: 2,
    name: 'Customise 3-Phase Motor Winding',
    image: service2,
    description: 'Professional motor winding services with precision and reliability.',
    features: [
      'Custom winding specifications',
      'High-grade materials',
      'Extended motor life',
      'Performance optimization'
    ]
  },
  {
    id: 3,
    name: 'Modern DC Starter for Power loom',
    image: service3,
    description: 'State-of-the-art DC starters designed specifically for power loom applications.',
    features: [
      'Smooth start operation',
      'Overload protection',
      'Digital control interface',
      'Energy efficient design'
    ]
  },
  {
    id: 4,
    name: 'Advanced Control Panel and Automation',
    image: service4,
    description: 'Comprehensive automation solutions for industrial control systems.',
    features: [
      'PLC integration',
      'Touch screen interface',
      'Remote monitoring',
      'Custom automation logic'
    ]
  }
];

export default function Products() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Our Products</h1>
        <p>Innovative Solutions for Industrial Excellence</p>
      </div>
      
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.imageContainer}>
              <Image
                src={product.image}
                alt={product.name}
                className={styles.productImage}
                width={400}
                height={300}
                priority
              />
              <div className={styles.overlay}>
                <h3>{product.name}</h3>
              </div>
            </div>
            
            <div className={styles.content}>
              <p className={styles.description}>{product.description}</p>
              <ul className={styles.features}>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              {/* <div className={styles.actions}>
                <button className={styles.quoteButton}>Request Quote</button>
                <button className={styles.detailsButton}>Learn More</button>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.ctaSection}>
        <h2>Need a Custom Solution?</h2>
        <p>Contact our experts for personalized industrial solutions</p>
        <button className={styles.contactButton} onClick={() => router.push('/contact')}>Contact Us</button>
      </div>
    </div>
  );
} 