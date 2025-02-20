import { Button } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  component: Button,
};

export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    label: "Click Me",
  },
};
