"use client";

import { forwardRef } from 'react';
import { button } from './button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={button({ variant, size })}
        {...props}
      >
        {children}
      </button>
    );
  }
);