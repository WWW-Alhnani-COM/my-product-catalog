// src/pages/Products/ProductsPage.jsx
import React from 'react';
import useProducts from '../../hooks/useProducts';
import ProductList from '../../components/products/ProductList/ProductList';
import styles from './ProductsPage.module.css';

const ProductsPage = () => {
  const { products, loading, error } = useProducts();

  return (
    <div className={styles.productsPage}>
      <h1>All Products</h1>
      <ProductList products={products} loading={loading} error={error} />
    </div>
  );
};

export default ProductsPage;