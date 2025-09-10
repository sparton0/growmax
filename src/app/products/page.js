'use client';

import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import { products } from '@/data/products';

export default function Products() {
  const router = useRouter();

  const handleProductClick = (productSlug) => {
    router.push(`/products/${productSlug}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Our Products</h1>
        <p>Innovative Solutions for Industrial Excellence</p>
      </div>
      
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div 
            key={product.id} 
            className={styles.productCard}
            onClick={() => handleProductClick(product.slug)}
          >
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
                {product.features.slice(0, 4).map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className={styles.actions}>
                <button className={styles.detailsButton}>View Details</button>
              </div>
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