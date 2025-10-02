// src/pages/ProductDetails/ProductDetailsPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';
import LoadingSpinner from '../../components/ui/LoadingSpinner/LoadingSpinner';
import Button from '../../components/ui/Button/Button';
import styles from './ProductDetailsPage.module.css';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const { product, loading, error } = useProductDetails(productId);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className={styles.error}>Error loading product: {error}</div>;
  if (!product) return <div className={styles.error}>Product not found.</div>;

  const { id, title, price, description, image, category, rating } = product;

  return (
    <div className={styles.productDetailsPage}>
      <div className={styles.productImageContainer}>
        <img src={image} alt={title} className={styles.productImageLarge} />
      </div>
      <div className={styles.productInfoContainer}>
        <h1>{title}</h1>
        <p className={styles.productCategory}>{category}</p>
        <p className={styles.productPrice}>${price.toFixed(2)}</p>
        <p className={styles.productRating}>Rating: {rating.rate} ({rating.count} reviews)</p>
        <p className={styles.productDescription}>{description}</p>
        <Button variant="primary">Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;