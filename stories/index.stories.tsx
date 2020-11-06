import React, { ComponentProps } from 'react'
import { Story } from '@storybook/react/types-6-0'
import Donut from '../src'

export default {
  title: 'Donut',
  component: Donut
}

const Template: Story<ComponentProps<typeof Donut>> = (args) => (
  <Donut {...args} />
);


const MultipleTemplate: Story<ComponentProps<typeof Donut>> = (args) => (
  <div style={{
    display: 'flex'
  }}>
    {args.children}
  </div>
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

export const WithGradient = Template.bind({});
WithGradient.args = {
  label: 'With gradient',
  value: 50,
  withGradient: true,
  colors: ['red', 'lime']
};

export const NotRounded = Template.bind({});
NotRounded.args = {
  label: 'No round',
  value: 50,
  rounded: false
};

export const Multiple = MultipleTemplate.bind({});
Multiple.args = {
  children: (
    <>
      <Donut label='1' value={25} color='lime' />
      <Donut label='2' value={50} color='magenta' />
      <Donut label='3' value={75} color='pink' />
      <Donut label='4' value={100} color='lightblue' />    
    </>
  )
};

export const WithDelay = MultipleTemplate.bind({});
WithDelay.args = {
  children: (
    <>
      <Donut label='1' value={25} color='lime' />
      <Donut label='2' value={66} color='magenta' delay={750} />
    </>
  )
};

export const Slow = Template.bind({});
Slow.args = {
  label: 'slow',
  value: 50,
  duration: 3000
};