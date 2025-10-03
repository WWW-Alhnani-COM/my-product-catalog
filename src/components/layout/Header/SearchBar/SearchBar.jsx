// src/components/layout/SearchBar/SearchBar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchBar.module.css';

// Hook مخصص لتأخير القيمة (Debounce)
// يمكنك وضع هذا في ملف منفصل مثل hooks/useDebounce.js
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // تأجيل البحث لمدة 300 مللي ثانية
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const handleSearch = (e) => {
    e.preventDefault();
    // يمكن تحسين هذا لنقل المستخدم إلى صفحة نتائج بحث معينة
    // مثلاً: /search?q=searchTerm
    if (debouncedSearchTerm) {
      navigate(`/products?search=${encodeURIComponent(debouncedSearchTerm)}`);
    } else {
      navigate('/products'); // إذا لم يكن هناك بحث، عد إلى جميع المنتجات
    }
  };

  return (
    <form onSubmit={handleSearch} className={styles.searchForm}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton}>
        🔍
      </button>
    </form>
  );
};

export default SearchBar;