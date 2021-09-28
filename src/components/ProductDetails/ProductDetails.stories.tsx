import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductDetails, { ProductDetailsLine } from './ProductDetails';

const products: ProductDetailsLine[] = [
  {label: 'Quantity', value: '205 g'},
  {label: 'Packaging', value: 'Papier, Aluminium, Tablette, Boite'},
  {label: 'Brands', value: 'Nestlé, NESTLE DESSERT, Tablettes'},
  {label: 'Categories', value: 'Snacks, Desserts, Sweet snacks, Cocoa and its products, Chocolates, Dark chocolates, Dark chocolate bar for cooking with more than 40% cocoa'},
  {label: 'Awards', value: 'Green Dot, Pure cocoa butter, fr:Triman'},
  {label: 'Origin of ingredients', value: 'Africa, Madagascar, South-America'},
  {label: 'Link to the product page on the official site of the producer', value: 'http://www.latableadessert.fr'},
  {label: 'Stores', value: 'Carrefour market, Coccinelle'},
  {label: 'Countries', value: 'Belgium, France, Réunion, Switzerland'},
];

export default {
  title: 'Components/ProductDetails',
  component: ProductDetails,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProductDetails>;

const Template: ComponentStory<typeof ProductDetails> = (args) => <ProductDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Product characteristics',
  subtitle: 'characteristics',
  products,
};
