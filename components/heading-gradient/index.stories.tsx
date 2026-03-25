import { GradientHeading } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof GradientHeading> = {
  title: 'Components/GradientHeading',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  component: GradientHeading,
  args: {
    headingAs: 'h2',
    children: 'Hello World',
  },
};

export default meta;

export const Primary: StoryObj<typeof GradientHeading> = {
  render: (args) => <GradientHeading {...args} />,
  args: {
    className: 'text-6xl font-bold',
  },
};
