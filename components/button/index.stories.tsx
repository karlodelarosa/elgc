import { QuantumButton } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof QuantumButton> = {
  title: 'Components/Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  component: QuantumButton,
};

export default meta;

export const Primary: StoryObj<typeof QuantumButton> = {
  render: (args) => <QuantumButton {...args} />,
};

export const Secondary: StoryObj<typeof QuantumButton> = {
  args: {
    label: 'Click Me',
  },
};
