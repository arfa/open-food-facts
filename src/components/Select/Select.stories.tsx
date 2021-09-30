import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Select from './Select';

const optionList = [
  { value: 'Javascript', label: 'Javascript' },
  { value: 'C++', label: 'C++' },
  { value: 'JAVA', label: 'JAVA' },
  { value: 'Python', label: 'Python' },
  { value: 'Swift', label: 'Swift' }
];

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: { onChange: { action: 'clicked' } },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  optionList: optionList,
  defaultValue: optionList[0]
};
