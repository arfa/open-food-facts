import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Layout from './Layout';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Components/Layout',
  component: Layout,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ], //Wrapping the story inside the router
  argTypes: { onSubmit: { action: 'clicked' } },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => (
  <Layout {...args}>
    <p>
      This component defines the layout of the application. It simply accepts <code>children</code>{' '}
      as props and render them to the <code>container</code>.
    </p>
    <p>
      The container class sets the max-width of an element to match the min-width of the current
      breakpoint. This is useful if you’d prefer to design for a fixed set of screen sizes instead
      of trying to accommodate a fully fluid viewport.
    </p>
  </Layout>
);

export const Default = Template.bind({});
Default.args = {
  brand: 'Brand',
  navList: [
    {
      label: 'Active Link',
      to: '/',
    },
    { label: 'Another Link', to: '/link' },
  ],
};
