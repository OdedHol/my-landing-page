'use client';

import React, { useId } from 'react';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

export default function Input({
  label,
  error,
  helperText,
  fullWidth = false,
  className = '',
  id,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id || `input-${generatedId}`;

  return (
    <div className={`${styles.inputWrapper} ${fullWidth ? styles.fullWidth : ''}`}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
          {props.required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        id={inputId}
        className={`${styles.input} ${error ? styles.error : ''} ${className}`}
        {...props}
      />
      {error && <span className={styles.errorText}>{error}</span>}
      {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
    </div>
  );
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

export function TextArea({
  label,
  error,
  helperText,
  fullWidth = false,
  className = '',
  id,
  ...props
}: TextAreaProps) {
  const generatedId = useId();
  const textareaId = id || `textarea-${generatedId}`;

  return (
    <div className={`${styles.inputWrapper} ${fullWidth ? styles.fullWidth : ''}`}>
      {label && (
        <label htmlFor={textareaId} className={styles.label}>
          {label}
          {props.required && <span className={styles.required}>*</span>}
        </label>
      )}
      <textarea
        id={textareaId}
        className={`${styles.textarea} ${error ? styles.error : ''} ${className}`}
        {...props}
      />
      {error && <span className={styles.errorText}>{error}</span>}
      {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
    </div>
  );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  options: { value: string; label: string }[];
}

export function Select({
  label,
  error,
  helperText,
  fullWidth = false,
  options,
  className = '',
  id,
  ...props
}: SelectProps) {
  const generatedId = useId();
  const selectId = id || `select-${generatedId}`;

  return (
    <div className={`${styles.inputWrapper} ${fullWidth ? styles.fullWidth : ''}`}>
      {label && (
        <label htmlFor={selectId} className={styles.label}>
          {label}
          {props.required && <span className={styles.required}>*</span>}
        </label>
      )}
      <select
        id={selectId}
        className={`${styles.select} ${error ? styles.error : ''} ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className={styles.errorText}>{error}</span>}
      {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
    </div>
  );
}

export function RestaurantIcon({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M48.9 51.8c-9 2.5-16.8 8.1-21.9 15.9l1.4.9c4.9-7.4 12.4-12.8 21-15.2l-.5-1.6zm0 0c-9 2.5-16.8 8.1-21.9 15.9l1.4.9c4.9-7.4 12.4-12.8 21-15.2l-.5-1.6zm0 0c-9 2.5-16.8 8.1-21.9 15.9l1.4.9c4.9-7.4 12.4-12.8 21-15.2l-.5-1.6zm0 0c-9 2.5-16.8 8.1-21.9 15.9l1.4.9c4.9-7.4 12.4-12.8 21-15.2l-.5-1.6zM119.8 93c-.9-25.5-19.5-46.7-44.1-51.9-1.1-5.3-5.9-9.4-11.7-9.4s-10.6 4-11.7 9.4C27.7 46.2 9.1 67.4 8.3 93H0v3.4h128V93h-8.2zM64 35c3.6 0 6.7 2.2 7.9 5.3-2.6-.4-5.2-.6-7.9-.6s-5.3.2-7.9.6c1.2-3 4.3-5.3 7.9-5.3zM11.7 93c1-27.6 24.1-49.7 52.3-49.7s51.3 22.1 52.3 49.7H11.7z"
        fill="#141414"
      />
    </svg>
  );
}

export function TailoredIcon({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M398.474 94.97a5.502 5.502 0 0 0-5.249-5.013l-75.392-21.675a5.498 5.498 0 0 0-5.552-.678c-12.636 5.523-33.677 8.82-56.285 8.82-22.346 0-43.252-3.239-55.926-8.664a5.492 5.492 0 0 0-5.165.447l-75.944 21.741a5.495 5.495 0 0 0-5.435 5.023L86.358 407.507a5.5 5.5 0 0 0 4.255 5.838l18.515 4.231a5.5 5.5 0 0 0 2.45-10.724l-13.846-3.164 26.406-303.78 70.05-20.054 55.681 200.42-74.176-111.264 12.916-27.655a5.5 5.5 0 0 0-3.26-7.55L163.6 126.63l21.387-24.466a5.5 5.5 0 1 0-8.283-7.24l-26.844 30.71a5.5 5.5 0 0 0 2.418 8.843l23.743 7.833-11.605 24.85a5.499 5.499 0 0 0 .408 5.378l85.584 128.375v110.312c0 .989.055 1.968.14 2.941a22.614 22.614 0 0 1-27.724 19.048l-82.46-19.88 33.302-111.225a5.505 5.505 0 0 0 .082-2.847l-23.464-98.892a5.5 5.5 0 0 0-10.704 2.54l23.125 97.456-34.544 115.376a5.5 5.5 0 0 0 3.98 6.924l88.105 21.241a33.887 33.887 0 0 0 7.948.95 33.694 33.694 0 0 0 27.881-14.943 33.53 33.53 0 0 0 35.83 13.993l88.104-21.241a5.5 5.5 0 0 0 4.048-6.674l-28.74-115.57 20.362-97.708a5.5 5.5 0 0 0-10.769-2.244l-20.618 98.939a5.493 5.493 0 0 0 .047 2.449l27.707 111.413-82.719 19.943a22.613 22.613 0 0 1-27.724-19.048c.084-.973.14-1.952.14-2.94v-42.612a5.476 5.476 0 0 0-.335-1.877v-65.735l85.728-128.462a5.5 5.5 0 0 0 .409-5.38l-11.604-24.849 23.744-7.833a5.5 5.5 0 0 0 2.418-8.843L334.96 94.583a5.5 5.5 0 1 0-8.282 7.24l21.685 24.807-21.748 7.175a5.5 5.5 0 0 0-3.26 7.55l12.914 27.654-74.09 111.023 56.107-200.176 69.571 20.003 26.411 303.83-13.849 3.164a5.5 5.5 0 1 0 2.45 10.723l18.518-4.23a5.5 5.5 0 0 0 4.254-5.838zM256.01 261.283 206.047 81.445c13.538 3.838 31.075 5.98 49.949 5.98 18.848 0 36.84-2.245 50.468-6.15z"
        fill="#141414"
      />
    </svg> 
  );
}

export function GoldStarIcon({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M123.574 52.994c2.434-4.932 6.417-4.932 8.852 0l18.164 36.807c2.434 4.932 8.879 9.613 14.322 10.404l40.617 5.902c5.443.791 6.674 4.578 2.735 8.418l-29.391 28.648c-3.938 3.84-6.4 11.416-5.47 16.836l6.938 40.453c.93 5.422-2.292 7.764-7.161 5.203l-36.329-19.1c-4.868-2.559-12.834-2.559-17.703 0l-36.329 19.1c-4.868 2.561-8.09.219-7.161-5.203l6.938-40.453c.93-5.42-1.532-12.996-5.47-16.836l-29.391-28.648c-3.938-3.84-2.708-7.627 2.735-8.418l40.617-5.902c5.443-.791 11.888-5.473 14.322-10.404l18.165-36.807z"
        stroke="#F9B618"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        fill="#FDD835"
      />
    </svg>
  );
}