// src/components/layout/Header/Header.jsx
import React from 'react';
import Navigation from './Navigation/Navigation'; 
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>MyShop</h1> {/* استبدل هذا بـ الصورة الفعلية للشعار لاحقًا */}
      </div>
      <Navigation />
    </header>
  );
};

export default Header;