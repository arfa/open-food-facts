import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

const props = {
  brand: 'Brand',
  navList: [
    {
      label: 'Active Link',
      to: '/',
    },
    { label: 'Another Link', to: '/link' },
  ],
};

export default {
  title: 'Components/Header',
  component: Header,
  decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)] //Wrapping the story inside the router
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...props,
};
