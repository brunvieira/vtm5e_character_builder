import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Point } from '../../src/components/Point';

const meta = {
  title: 'Components/Point',
  component: Point,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    selected: { control: 'boolean' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Point>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Selected: Story = {
  args: {
    selected: true,
  },
};

export const Unselected: Story = {
  args: {
    selected: false,
  },
};