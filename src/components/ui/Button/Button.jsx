// src/components/ui/Button/Button.jsx
import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', onClick, disabled, ...props }) => {
  const buttonClasses = `${styles.button} ${styles[variant]}`;

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;