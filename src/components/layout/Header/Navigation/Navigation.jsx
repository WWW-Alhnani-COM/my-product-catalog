// src/components/layout/Header/Navigation/Navigation.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaShoppingBag, FaInfoCircle } from 'react-icons/fa';
import styles from './Navigation.module.css';

const Navigation = () => {
  const location = useLocation();

  // تحديد إذا كانت الصفحة نشطة
  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/', icon: FaHome, text: 'Home' },
    { path: '/products', icon: FaShoppingBag, text: 'Products' },
    { path: '/about', icon: FaInfoCircle, text: 'About' }
  ];

  return (
    <>
      {/* التنقل العادي للشاشات الكبيرة */}
      <nav className={styles.desktopNav}>
        <ul className={styles.navList}>
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.path} className={styles.navItem}>
                <Link 
                  to={item.path} 
                  className={`${styles.navLink} ${isActive(item.path) ? styles.active : ''}`}
                >
                  <span className={styles.navText}>{item.text}</span>
                  <IconComponent className={styles.navIcon} />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* التنقل السفلي للشاشات الصغيرة */}
      <nav className={styles.mobileNav}>
        <ul className={styles.mobileNavList}>
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.path} className={styles.mobileNavItem}>
                <Link 
                  to={item.path} 
                  className={`${styles.mobileNavLink} ${isActive(item.path) ? styles.mobileActive : ''}`}
                >
                  <IconComponent className={styles.mobileNavIcon} />
                  <span className={styles.mobileNavText}>{item.text}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;