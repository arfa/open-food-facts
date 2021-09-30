import React from 'react';
import clsx from 'clsx';
import Button from '../Button/Button';

export interface ProductCardProps {
  name?: string;
  image?: string;
  nutriscore?: string;
  novagroup?: string;
  buttonLabel?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string;
  style?: React.CSSProperties;
}

const getNutriScore = (score: any) => `https://static.openfoodfacts.org/images/attributes/nutriscore-${score}.svg`
const getNovaScore = (score: any) => `https://static.openfoodfacts.org/images/attributes/nova-group-${score}.svg`

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image = 'https://world.openfoodfacts.org/images/icons/product-silhouette-transparent.svg',
  novagroup,
  nutriscore,
  buttonLabel = 'More info',
  onClick,
  className,
  style,
  ...props
}) => {
  return (
    <div className={clsx(className, 'card lg:card-side shadow-sm bg-blue-50')} style={style} {...props}>
      <div className='px-4 pt-4 h-2/3 flex content-center'>
        <img src={image} alt={name} className='m-auto' />
      </div>
      <div className='p-4'>
        <h4 className='pb-4'>{name}</h4>
        <div className={'flex justify-start h-6'}>
          <img src={getNutriScore(nutriscore)} alt={nutriscore} className='w-16' />
          <img src={getNovaScore(novagroup)} alt={novagroup} className='w-4 ml-4' />
        </div>
        <div className='justify-end card-actions'>
          <Button variant='link' onClick={onClick}>{buttonLabel}</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
