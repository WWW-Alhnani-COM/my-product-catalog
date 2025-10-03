// src/pages/Home/components/HeroBanner/HeroBanner.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroBanner.module.css';

const HeroBanner = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>New Season Arrivals</h1>
        <p className={styles.heroSubtitle}>Discover the latest trends at unbeatable prices</p>
        <Link to="/products" className={styles.heroButton}>
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default HeroBanner;