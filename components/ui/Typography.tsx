import React from 'react';
import styles from './Typography.module.css';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Heading({ level = 1, children, className = '', style }: HeadingProps) {
  const classes = [styles.heading, styles[`h${level}`], className].filter(Boolean).join(' ');

  switch (level) {
    case 1:
      return <h1 className={classes} style={style}>{children}</h1>;
    case 2:
      return <h2 className={classes} style={style}>{children}</h2>;
    case 3:
      return <h3 className={classes} style={style}>{children}</h3>;
    case 4:
      return <h4 className={classes} style={style}>{children}</h4>;
    case 5:
      return <h5 className={classes} style={style}>{children}</h5>;
    case 6:
      return <h6 className={classes} style={style}>{children}</h6>;
    default:
      return <h1 className={classes} style={style}>{children}</h1>;
  }
}

interface TextProps {
  children: React.ReactNode;
  variant?: 'body' | 'lead' | 'small' | 'caption';
  color?: 'primary' | 'secondary' | 'light';
  align?: 'left' | 'center' | 'right';
  className?: string;
  as?: 'p' | 'span' | 'div';
  style?: React.CSSProperties;
}

export function Text({
  children,
  variant = 'body',
  color = 'primary',
  align = 'left',
  className = '',
  as = 'p',
  style,
}: TextProps) {
  const classes = [
    styles.text,
    styles[variant],
    styles[`color-${color}`],
    styles[`align-${align}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (as === 'span') {
    return <span className={classes} style={style}>{children}</span>;
  }
  if (as === 'div') {
    return <div className={classes} style={style}>{children}</div>;
  }
  return <p className={classes} style={style}>{children}</p>;
}

interface DisplayProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  gradient?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function Display({ children, size = 'medium', gradient = false, className = '', style }: DisplayProps) {
  const classes = [styles.display, styles[`display-${size}`], gradient ? styles.gradient : '', className]
    .filter(Boolean)
    .join(' ');

  return <h1 className={classes} style={style}>{children}</h1>;
}

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'error';
  className?: string;
}

export function Badge({ children, variant = 'primary', className = '' }: BadgeProps) {
  const classes = [styles.badge, styles[`badge-${variant}`], className].filter(Boolean).join(' ');

  return <span className={classes}>{children}</span>;
}
