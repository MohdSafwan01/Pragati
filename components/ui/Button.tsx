import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        {
          'bg-sky-600 text-white hover:bg-sky-700': variant === 'primary',
          'bg-amber-500 text-white hover:bg-amber-600': variant === 'secondary',
          'border border-slate-300 bg-transparent text-slate-700 hover:bg-slate-50': variant === 'outline',
          'bg-transparent text-slate-700 hover:bg-slate-100': variant === 'ghost',
          'bg-red-600 text-white hover:bg-red-700': variant === 'danger',
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-4 py-2 text-sm': size === 'md',
          'px-6 py-3 text-base': size === 'lg',
        },
        className
      )}
      {...props}
    />
  );
}
