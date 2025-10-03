// src/components/products/ProductGrid/ProductGrid.jsx
import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import LoadingSpinner from '../../ui/LoadingSpinner/LoadingSpinner';
import styles from './ProductGrid.module.css';

const ProductGrid = ({ 
  products, 
  loading = false, 
  error = null,
  emptyMessage = "لا توجد منتجات متاحة",
  onAddToCart,
  columns = 4,
  animated = true
}) => {
  const [visibleProducts, setVisibleProducts] = useState([]);

  useEffect(() => {
    if (products && animated) {
      // تأثير ظهور المنتجات بشكل متتابع
      setVisibleProducts([]);
      let currentIndex = 0;
      
      const timer = setInterval(() => {
        if (currentIndex < products.length) {
          setVisibleProducts(prev => [...prev, products[currentIndex]]);
          currentIndex++;
        } else {
          clearInterval(timer);
        }
      }, 100);

      return () => clearInterval(timer);
    } else {
      setVisibleProducts(products || []);
    }
  }, [products, animated]);

  // حساب عدد الأعمدة بناءً على حجم الشاشة
  const getGridColumns = () => {
    if (typeof columns === 'object') {
      // إذا كان columns كائن responsive
      if (window.innerWidth < 768) return columns.mobile || 2;
      if (window.innerWidth < 1024) return columns.tablet || 3;
      return columns.desktop || 4;
    }
    return columns;
  };

  const [gridColumns, setGridColumns] = useState(getGridColumns());

  useEffect(() => {
    const handleResize = () => {
      setGridColumns(getGridColumns());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [columns]);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <LoadingSpinner size="large" />
        <p className={styles.loadingText}>جاري تحميل المنتجات...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <div className={styles.errorIcon}>⚠️</div>
        <h3 className={styles.errorTitle}>حدث خطأ</h3>
        <p className={styles.errorMessage}>{error.message || 'تعذر تحميل المنتجات'}</p>
        <button 
          className={styles.retryButton}
          onClick={() => window.location.reload()}
        >
          إعادة المحاولة
        </button>
      </div>
    );
  }

  if (!visibleProducts || visibleProducts.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>📦</div>
        <h3 className={styles.emptyTitle}>لا توجد منتجات</h3>
        <p className={styles.emptyMessage}>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={styles.productGrid}>
      <div 
        className={styles.grid}
        style={{ 
          '--grid-columns': gridColumns,
          '--gap': '1.5rem'
        }}
      >
        {visibleProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={animated ? index : 0}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
      
      {/* مؤشر نهاية القائمة */}
      <div className={styles.listEnd}>
        <p>عرض {visibleProducts.length} منتج</p>
      </div>
    </div>
  );
};

export default ProductGrid;