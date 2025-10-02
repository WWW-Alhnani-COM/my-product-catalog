import React, { useState, useEffect } from 'react';
import styles from './FeaturedProducts.module.css';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className={styles.featuredProducts}>
        <h2 className={styles.title}>Featured Products</h2>
        <div className={styles.loading}>Loading products...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.featuredProducts}>
        <h2 className={styles.title}>Featured Products</h2>
        <div className={styles.error}>Error: {error}</div>
      </section>
    );
  }

  // عرض أول 6 منتجات فقط
  const featuredProducts = products.slice(0, 6);

  return (
    <section className={styles.featuredProducts}>
      <h2 className={styles.title}>Featured Products</h2>
      <div className={styles.productGrid}>
        {featuredProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.imageContainer}>
              <img 
                src={product.image} 
                alt={product.title}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.productTitle}>{product.title}</h3>
              <p className={styles.price}>${product.price}</p>
              <button className={styles.button}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;