import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'bordered' | 'feature';
  hoverable?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export default function Card({
  children,
  variant = 'default',
  hoverable = false,
  className = '',
  style,
  onClick,
}: CardProps) {
  const classes = [
    styles.card,
    styles[variant],
    hoverable ? styles.hoverable : '',
    onClick ? styles.clickable : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (onClick) {
    return (
      <button className={classes} onClick={onClick} style={style}>
        {children}
      </button>
    );
  }

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}

interface CardHeaderProps {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
}

export function CardHeader({ icon, title, subtitle }: CardHeaderProps) {
  return (
    <div className={styles.header}>
      {icon && <div className={styles.headerIcon}>{icon}</div>}
      <div>
        <h3 className={styles.title}>{title}</h3>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </div>
  );
}

interface CardBodyProps {
  children: React.ReactNode;
}

export function CardBody({ children }: CardBodyProps) {
  return <div className={styles.body}>{children}</div>;
}

interface CardFooterProps {
  children: React.ReactNode;
}

export function CardFooter({ children }: CardFooterProps) {
  return <div className={styles.footer}>{children}</div>;
}
