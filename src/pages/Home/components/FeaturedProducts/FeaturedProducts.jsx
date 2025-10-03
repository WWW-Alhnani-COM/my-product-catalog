import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // استيراد Link
import styles from './FeaturedProducts.module.css';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products'); // تأكد من حذف المسافات الزائدة
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
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Loading amazing products...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.featuredProducts}>
        <h2 className={styles.title}>Featured Products</h2>
        <div className={styles.error}>
          <p>❌ Error: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className={styles.retryButton}
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  // عرض أول 6 منتجات فقط
  const featuredProducts = products.slice(0, 6);

  return (
    <section className={styles.featuredProducts}>
      <h2 className={styles.title}>Featured Products</h2>
      <div className={styles.productGrid}>
        {featuredProducts.map((product, index) => (
          <Link // استخدم Link لجعل البطاقة قابلة للنقر
            key={product.id} 
            to={`/product/${product.id}`} // عنوان URL لصفحة التفاصيل مع معرف المنتج
            className={styles.productCardLink} // كلاس جديد للرابط
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={styles.productCard}> {/* حافظ على تنسيق البطاقة داخل الرابط */}
              <div className={styles.imageContainer}>
                <img 
                  src={product.image} 
                  alt={product.title}
                  className={styles.image}
                />
                {/* مثال على شارة الخصم، إذا كنت ترغب في إضافتها */}
                {/* <div className={styles.badge}>🔥 Trending</div> */}
              </div>
              
              <div className={styles.content}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <div className={styles.rating}>
                  ⭐ {product.rating.rate} ({product.rating.count}) {/* استخدام التقييم من API */}
                </div>
                <p className={styles.price}>${product.price}</p>
                <div className={styles.button}> {/* استخدم div بدلاً من button */}
                  <span>View Details</span>
                  <span className={styles.buttonIcon}>🛒</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;