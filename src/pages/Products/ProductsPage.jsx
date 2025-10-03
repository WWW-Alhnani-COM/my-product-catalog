// src/pages/Products/ProductsPage.jsx (مطابق لما فعلناه من قبل)
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import ProductList from '../../components/products/ProductList/ProductList';
import styles from './ProductsPage.module.css';

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';
  const category = searchParams.get('category') || 'all'; // الحصول على الفئة من URL
  const { products, loading, error } = useProducts();

  // تصفية المنتجات حسب الفئة (مثلاً)
  const filteredProducts = category && category !== 'all' ?
    products.filter(p => p.category === category) :
    products;

  return (
    <div className={styles.productsPage}>
      <h1>
        {category === 'all' ? 'All Products' : `Products - ${category}`} {searchTerm && ` - Search: "${searchTerm}"`}
      </h1>
      <ProductList products={filteredProducts} loading={loading} error={error} searchTerm={searchTerm} />
      
    </div>
    
    
  );
};

export default ProductsPage;