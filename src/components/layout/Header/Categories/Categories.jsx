// src/components/layout/Categories/Categories.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styles from './Categories.module.css';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // أيقونة SVG لـ All Products
  const ALL_PRODUCTS_IMAGE = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMCA3SDRWMmEyIDIgMCAwIDEgMi0yaDEyYTIgMiAwIDAgMSAyIDJ2NU0yMCAxMHYxMGEyIDIgMCAwIDEtMiAySDZhMiAyIDAgMCAxLTItMlYxMGgxNloiIGZpbGw9IiM2NjdlZWEiLz48L3N2Zz4=';

  // دالة التحكم في إظهار/إخفاء الشريط عند التمرير
  const controlNavbar = useCallback(() => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;

      // إخفاء الشريط عند التمرير لأسفل، وإظهاره عند التمرير لأعلى
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // التمرير لأسفل - إخفاء
        setIsVisible(false);
      } else {
        // التمرير لأعلى - إظهار
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    }
  }, [lastScrollY]);

  // إضافة event listener للتمرير
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar, { passive: true });

      // تنظيف event listener عند unmount
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [controlNavbar]);

  // دالة لجلب صورة تمثيلية لكل فئة من الـ API
  const fetchCategoryImage = async (categoryName) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/category/${categoryName}?limit=1`);
      const products = await response.json();
      
      if (products.length > 0) {
        return products[0].image;
      }
      return null;
    } catch (err) {
      console.error(`Error fetching image for ${categoryName}:`, err);
      return null;
    }
  };

  // دالة لتهيئة الفئات مع صورها
  const initializeCategories = async () => {
    try {
      setLoading(true);
      
      const categoryNames = [
        'electronics',
        'jewelery',
        "men's clothing",
        "women's clothing"
      ];

      const categoriesWithImages = await Promise.all(
        categoryNames.map(async (categoryName) => {
          const image = await fetchCategoryImage(categoryName);
          
          return {
            id: categoryName,
            name: formatCategoryName(categoryName),
            image: image || getFallbackImage(categoryName)
          };
        })
      );

      // إضافة فئة "All Products" مع الأيقونة SVG
      categoriesWithImages.push({
        id: 'all',
        name: 'All Products',
        image: ALL_PRODUCTS_IMAGE
      });

      setCategories(categoriesWithImages);
    } catch (err) {
      setError('Failed to load categories');
      console.error('Error initializing categories:', err);
    } finally {
      setLoading(false);
    }
  };

  // دالة لتنسيق أسماء الفئات
  const formatCategoryName = (name) => {
    const nameMap = {
      'electronics': 'Electronics',
      'jewelery': 'Jewelry',
      "men's clothing": "Men's Clothing",
      "women's clothing": "Women's Clothing"
    };
    return nameMap[name] || name;
  };

  // دالة للحصول على صورة بديلة إذا فشل جلب الصورة
  const getFallbackImage = (categoryName) => {
    const fallbackImages = {
      'electronics': 'https://via.placeholder.com/100/4CAF50/ffffff?text=📱',
      'jewelery': 'https://via.placeholder.com/100/FF9800/ffffff?text=💎',
      "men's clothing": 'https://via.placeholder.com/100/2196F3/ffffff?text=👔',
      "women's clothing": 'https://via.placeholder.com/100/E91E63/ffffff?text=👗'
    };
    return fallbackImages[categoryName] || 'https://via.placeholder.com/100/cccccc/ffffff?text=📦';
  };

  useEffect(() => {
    initializeCategories();
  }, []);

  if (loading) {
    return (
      <div className={`${styles.categories} ${isVisible ? styles.visible : styles.hidden}`}>
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}></div>
          <p>Loading categories...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${styles.categories} ${isVisible ? styles.visible : styles.hidden}`}>
        <div className={styles.errorContainer}>
          <p>{error}</p>
          <button onClick={initializeCategories} className={styles.retryButton}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.categories} ${isVisible ? styles.visible : styles.hidden}`}>
      <h2 className={styles.title}>Shop by Category</h2>
      <ul className={styles.categoryList}>
        {categories.map((category) => (
          <li key={category.id} className={styles.categoryItem}>
            <Link
              to={`/products?category=${category.id}`}
              className={styles.categoryLink}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={category.image}
                  alt={category.name}
                  className={styles.categoryImage}
                  loading="lazy"
                />
              </div>
              <span className={styles.categoryName}>{category.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;