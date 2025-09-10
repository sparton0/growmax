'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { getProductBySlug } from '@/data/products';
import styles from './page.module.css';

export default function ProductDetail({ params }) {
  const router = useRouter();
  const product = getProductBySlug(params.slug);

  if (!product) {
    return (
      <div className={styles.container}>
        <div className={styles.errorSection}>
          <h1>Product Not Found</h1>
          <p>The product you're looking for doesn't exist.</p>
          <button 
            className={styles.backButton}
            onClick={() => router.push('/products')}
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Breadcrumb */}
      {/* <div className={styles.breadcrumb}>
        <button 
          className={styles.breadcrumbLink}
          onClick={() => router.push('/products')}
        >
          Products
        </button>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span className={styles.breadcrumbCurrent}>{product.name}</span>
      </div> */}

      {/* Product Header */}
      <div className={styles.productHeader}>
        <div className={styles.productImageContainer}>
          <Image
            src={product.image}
            alt={product.name}
            className={styles.productImage}
            width={600}
            height={400}
            priority
          />
        </div>
        <div className={styles.productInfo}>
          <h1 className={styles.productTitle}>{product.name}</h1>
          <p className={styles.productDescription}>{product.description}</p>
          <div className={styles.actionButtons}>
            {/* <button className={styles.quoteButton}></button> */}
            <button className={styles.contactButton} onClick={() => router.push('/contact')}>
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Detailed Description */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Product Overview</h2>
        <p className={styles.detailedDescription}>{product.detailedDescription}</p>
      </section>

      {/* Features */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Key Features</h2>
        <div className={styles.featuresGrid}>
          {product.features.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <div className={styles.featureIcon}>✓</div>
              <span className={styles.featureText}>{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Specifications */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Technical Specifications</h2>
        <div className={styles.specificationsTable}>
          {Object.entries(product.specifications).map(([key, value], index) => (
            <div key={index} className={styles.specRow}>
              <div className={styles.specLabel}>{key}</div>
              <div className={styles.specValue}>{value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Applications */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Applications</h2>
        <div className={styles.applicationsList}>
          {product.applications.map((application, index) => (
            <div key={index} className={styles.applicationItem}>
              <div className={styles.applicationIcon}>→</div>
              <span className={styles.applicationText}>{application}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>Interested in this Product?</h2>
        <p>Get in touch with our experts for more information, pricing, and customization options.</p>
        <div className={styles.ctaButtons}>
          {/* <button className={styles.primaryCtaButton} onClick={() => router.push('/contact')}>
            Get Quote
          </button> */}
          <button className={styles.secondaryCtaButton} onClick={() => router.push('/contact')}>
            Contact Sales
          </button>
        </div>
      </section>
    </div>
  );
}
