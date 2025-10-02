// src/components/products/ProductCard/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { id, title, price, image, category } = product;

  // تقصير العنوان إذا كان طويلًا
  const truncatedTitle = title.length > 50 ? `${title.substring(0, 50)}...` : title;

  return (
    <div className={styles.productCard}>
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} className={styles.productImage} />
        <div className={styles.productInfo}>
          <h3 className={styles.productTitle}>{truncatedTitle}</h3>
          <p className={styles.productCategory}>{category}</p>
          <p className={styles.productPrice}>${price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;