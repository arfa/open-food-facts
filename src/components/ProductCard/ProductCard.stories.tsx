import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductCard, { ProductCardProps } from './ProductCard';

const product: ProductCardProps = {
  image: 'https://images.openfoodfacts.org/images/products/761/303/504/0823/front_en.190.100.jpg',
  name: 'Chocolat noir pour préparation pâtissière - Nestlé - 205 g',
  nutriscore: 'https://static.openfoodfacts.org/images/attributes/nutriscore-e.svg',
  novagroup: 'https://static.openfoodfacts.org/images/attributes/nova-group-4.svg',
}

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => <ProductCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...product,
};

