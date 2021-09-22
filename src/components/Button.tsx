import React from 'react';
import clsx from 'clsx';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'link' | 'info' | 'success' | 'warning' | 'error';
  outline?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
  className,
  style,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(className, 'btn', {
        [`btn-${variant}`]: variant,
      })}
      type={type }
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
