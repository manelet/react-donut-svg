import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import Donut from '..'

export default {
  title: 'Example/Button',
  component: Donut
}

const Template: Story<ComponentProps<typeof Donut>> = (args) => (
  <Donut {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'test',
  value: 50
};

export const Bigger = Template.bind({});
Bigger.args = {
  label: 'test',
  value: 50,
  width: 300,
  height: 300
};