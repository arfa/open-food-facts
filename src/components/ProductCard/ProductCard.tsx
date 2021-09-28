import React from 'react';
import clsx from 'clsx';

export interface ProductCardProps {
  name?: string;
  image?: string;
  nutriscore?: string;
  novagroup?: string;
  buttonLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  novagroup,
  nutriscore,
  buttonLabel = 'More info',
  className,
  style,
  ...props
}) => {
  return (
    <div className={clsx(className, 'card lg:card-side shadow-md')} style={style} {...props}>
      <div className='px-4 pt-4'>
        <img src={image} alt={name} className='m-auto' />
      </div>
      <div className='p-4'>
        <h4 className='pb-4'>{name}</h4>
        <div className={'flex justify-start h-6'}>
          <img src={nutriscore} alt={nutriscore} className='w-16' />
          <img src={novagroup} alt={novagroup} className='w-4 ml-4' />
        </div>
        <div className='justify-end card-actions'>
          <button className='btn btn-ghost'>{buttonLabel}</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
