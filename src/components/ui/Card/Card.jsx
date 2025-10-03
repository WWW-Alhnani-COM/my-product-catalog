// src/components/ui/Card/Card.jsx
import React from 'react';
import styles from './Card.module.css';

const Card = ({ children, className = '', ...props }) => {
  // دمج الكلاس المخصص مع الكلاس الافتراضي
  const cardClasses = `${styles.card} ${className}`.trim();

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

export default Card;