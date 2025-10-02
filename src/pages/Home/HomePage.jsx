// src/pages/Home/HomePage.jsx
import React from 'react';
import HeroBanner from './components/HeroBanner/HeroBanner';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <HeroBanner />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;