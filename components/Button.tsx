import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'right',
    isLoading = false,
    children,
    className = '',
    disabled = false,
    ...props
  }, ref) => {
    // Base styles
    const baseStyles = `
      inline-flex items-center justify-center font-medium uppercase tracking-wider
      transition-all duration-300 ease-out
      focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]
      disabled:opacity-50 disabled:cursor-not-allowed
      relative overflow-hidden group
    `;

    // Size variants
    const sizeStyles = {
      sm: 'px-4 py-2 text-xs gap-2',
      md: 'px-6 py-3 text-sm gap-3',
      lg: 'px-10 py-4 text-base gap-4',
    };

    // Color variants
    const variantStyles = {
      primary: `
        bg-[var(--color-accent)] text-white
        hover:shadow-[0_20px_40px_rgba(25,171,228,0.3)]
        dark:hover:shadow-[0_20px_40px_rgba(0,180,216,0.3)]
      `,
      secondary: `
        border-2 border-[var(--color-accent)] bg-transparent text-[var(--color-accent)]
        hover:bg-[var(--color-accent)]/10 dark:hover:bg-[var(--color-accent)]/5
      `,
      ghost: `
        bg-white/10 dark:bg-white/5 border border-white/20
        text-white hover:bg-[var(--color-accent)]/20
        hover:border-[var(--color-accent)]/50
      `,
    };

    const combinedClassName = `
      ${baseStyles}
      ${sizeStyles[size]}
      ${variantStyles[variant]}
      ${className}
    `;

    const iconElement = icon || (
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    );

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={combinedClassName}
        {...props}
      >
        {iconPosition === 'left' && iconElement}
        {isLoading ? 'Loading...' : children}
        {iconPosition === 'right' && iconElement}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
