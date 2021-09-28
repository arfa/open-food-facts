import React from 'react';
import clsx from 'clsx';

export interface ProductDetailsLine {
  label: string;
  value: string;
}

export interface ProductDetailsProps {
  title?: string;
  subtitle?: string;
  products?: ProductDetailsLine[];
  className?: string;
  style?: React.CSSProperties;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  title,
  subtitle,
  products = [],
  className,
  style,
  ...props
}) => {
  console.log('products: ', products);
  if (!products?.length) return null;
  return (
    <div
      className={clsx(className, 'min-h-screen flex items-center justify-center px-4')}
      style={style}
      {...props}
    >
      <div className='max-w-4xl w-full rounded-lg shadow-sm'>
        <div className='p-4 border-b'>
          <h2 className='text-2xl '>{title}</h2>
          <p className='text-sm text-gray-500'>{subtitle}</p>
        </div>
        <div>
          {products.map((productLine, idx) => {
            return (
              <div className='md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b'>
                <p className='text-gray-600'>{productLine.label}</p>
                <p>{productLine.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
