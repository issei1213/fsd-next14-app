import clsx from 'clsx';
import { ReactNode } from 'react';

type Props = {
  as?: 'p' | 'span';
  children: ReactNode;
  variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  size: 'sm' | 'md' | 'lg';
};

export const Typography = ({ as = 'p', children, variant, size }: Props) => {
  const Component = as;

  const variantMap = {
    primary: 'text-red-700',
    secondary: 'text-blue-500',
    tertiary: 'text-gray-700',
    quaternary: 'text-gray-900',
  };

  const sizeMap = {
    sm: 'text-sm font-medium',
    md: 'text-base font-bold',
    lg: 'text-lg font-bold',
  };

  return (
    <Component className={clsx(variantMap[variant], sizeMap[size])}>
      {children}
    </Component>
  );
};
