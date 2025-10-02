// src/pages/Home/components/HeroBanner/HeroBanner.jsx
import React from 'react';
import styles from './HeroBanner.module.css';

const HeroBanner = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Welcome to MyShop!</h1>
        <p>Discover amazing products for every need.</p>
        {/* استخدم صورة خلفية حقيقية إذا أمكن */}
        {/* <img src="/src/assets/images/hero-bg.jpg" alt="Hero" className={styles.heroImage} /> */}
      </div>
    </section>
  );
};

export default HeroBanner;