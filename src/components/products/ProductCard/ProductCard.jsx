// src/components/ui/Card/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../ui/Card/Card'; 
import Button from '../../ui/Button/Button'; // استيراد Button من المجلد ui
import styles from './ProductCard.module.css'; // استيراد CSS مخصص

const ProductCard = ({ product }) => {
  const { id, title, price, image, category } = product;

  // تقصير العنوان إذا كان طويلًا
  const truncatedTitle = title.length > 50 ? `${title.substring(0, 50)}...` : title;

  // --- حساب الخصم (مبدئي) ---
  const originalPrice = price * 1.2; // مثال مبدئي
  const discountPercentage = Math.round(((originalPrice - price) / originalPrice) * 100);
  // --- النهاية ---

  return (
    <Link to={`/product/${id}`} className={styles.productCardLink}> {/* رابط يغطي البطاقة */}
      <Card className={styles.productCardContent}> {/* استخدام Card كحاوية */}
        <div className={styles.imageContainer}>
          <img src={image} alt={title} className={styles.productImage} />
          {discountPercentage > 0 && (
            <span className={styles.discountBadge}>-{discountPercentage}%</span>
          )}
        </div>
        <div className={styles.productInfo}>
          <h3 className={styles.productTitle}>{truncatedTitle}</h3>
          <p className={styles.productCategory}>{category}</p>
          <div className={styles.priceContainer}>
            <p className={styles.productPrice}>${price.toFixed(2)}</p>
            {discountPercentage > 0 && (
              <p className={styles.originalPrice}>${originalPrice.toFixed(2)}</p>
            )}
          </div>
          <Button variant="primary" className={styles.cardAddToCartBtn}>
            Add to Cart
          </Button>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;