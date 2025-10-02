// src/components/products/ProductList/ProductList.jsx
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import LoadingSpinner from '../../ui/LoadingSpinner/LoadingSpinner';
import styles from './ProductList.module.css';

const ProductList = ({ products, loading, error }) => {
  if (loading) return <LoadingSpinner />;
  if (error) return <div className={styles.error}>Error loading products: {error}</div>;

  return (
    <div className={styles.productList}>
      {products && products.length > 0 ? (
        products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductList;