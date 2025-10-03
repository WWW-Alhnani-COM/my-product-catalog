// src/components/ui/LoadingSpinner/LoadingSpinner.jsx
import React from 'react';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
      <p className={styles.loadingText}>Loading products...</p> {/* إضافة نص اختياري */}
    </div>
  );
};

export default LoadingSpinner;