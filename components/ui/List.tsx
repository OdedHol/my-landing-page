import React from 'react';
import styles from './List.module.css';

interface ListItemProps {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export function ListItem({ icon, title, description, children }: ListItemProps) {
  return (
    <li className={styles.listItem}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.content}>
        {title && <h4 className={styles.title}>{title}</h4>}
        {description && <p className={styles.description}>{description}</p>}
        {children}
      </div>
    </li>
  );
}

interface ListProps {
  children: React.ReactNode;
  variant?: 'default' | 'feature' | 'checklist';
  className?: string;
  style?: React.CSSProperties;
}

export default function List({ children, variant = 'default', className = '', style }: ListProps) {
  const classes = [styles.list, styles[variant], className].filter(Boolean).join(' ');

  return <ul className={classes} style={style}>{children}</ul>;
}
