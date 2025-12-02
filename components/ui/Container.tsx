import React from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large' | 'full';
  className?: string;
}

export default function Container({ children, size = 'medium', className = '' }: ContainerProps) {
  const classes = [styles.container, styles[size], className].filter(Boolean).join(' ');

  return <div className={classes}>{children}</div>;
}

interface SectionProps {
  children: React.ReactNode;
  background?: 'default' | 'surface' | 'accent';
  padding?: 'none' | 'small' | 'medium' | 'large';
  className?: string;
  style?: React.CSSProperties;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(({
  children,
  background = 'default',
  padding = 'large',
  className = '',
  style,
}, ref) => {
  const classes = [styles.section, styles[`bg-${background}`], styles[`padding-${padding}`], className]
    .filter(Boolean)
    .join(' ');

  return <section ref={ref} className={classes} style={style}>{children}</section>;
});

interface GridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'small' | 'medium' | 'large';
  className?: string;
  style?: React.CSSProperties;
}

export function Grid({ children, columns = 3, gap = 'medium', className = '', style }: GridProps) {
  const classes = [styles.grid, styles[`cols-${columns}`], styles[`gap-${gap}`], className]
    .filter(Boolean)
    .join(' ');

  return <div className={classes} style={style}>{children}</div>;
}
