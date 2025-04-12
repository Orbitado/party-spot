import React, { ButtonHTMLAttributes } from 'react';
import styles from './button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost' | 'link' | 'destructive';
  size?: 'sm' | 'default' | 'lg' | 'icon';
  isLoading?: boolean;
}

function Button({
  children,
  variant = 'primary',
  size = 'default',
  isLoading = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const buttonClasses = [
    styles.button,
    styles[`button-${variant}`],
    styles[`button-${size}`],
    isLoading ? styles['button-loading'] : '',
    disabled ? styles['button-disabled'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button {...props} disabled={disabled || isLoading} className={buttonClasses}>
      {isLoading && <div className={styles['loading-spinner']} />}
      {children}
    </button>
  );
}

export default Button;
