// src/components/layout/Header/Header.jsx
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // استيراد أيقونة السلة
import Navigation from './Navigation/Navigation';
import Categories from './Categories/Categories';
import SearchBar from './SearchBar/SearchBar';
import styles from './Header.module.css';

const Header = () => {
  const handleCartClick = () => {
    // منطق التنقل إلى صفحة السلة
    console.log('Cart clicked!'); // مثال على منطق
    // مثلاً: navigate('/cart');
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.leftSection}> {/* حاوية جديدة للLogo وأيقونة السلة */}
          <div className={styles.logo}>
            <h1>MyShop</h1>
          </div>
          <button 
            className={styles.cartButton} // تغيير الاسم
            onClick={handleCartClick}
            aria-label="View cart" // تسمية لسهولة الوصول
          >
            <FaShoppingCart className={styles.cartIcon} /> {/* تغيير الاسم */}
          </button>
        </div>
        <div className={styles.navContainer}> {/* حاوية لـ Navigation و SearchBar */}
          <Navigation />
          <SearchBar /> {/* إضافة المكون هنا */}
        </div>
      </header>
      <Categories />
    </>
  );
};

export default Header;