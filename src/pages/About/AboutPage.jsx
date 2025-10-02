// src/pages/About/AboutPage.jsx
import React from 'react';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <h1>About Us</h1>
      <p>This is a simple product catalog built with React.</p>
      <p>It fetches product data from the Fake Store API.</p>
    </div>
  );
};

export default AboutPage;