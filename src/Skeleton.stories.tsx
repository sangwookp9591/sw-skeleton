import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton, SkeletonProps } from './Skeleton';

// meta
const meta: Meta = {
  title: 'components/skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    borderRadius: { control: 'text' },
    backgroundColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<SkeletonProps>;

export const Default: Story = {
  args: {
    width: '100px',
    height: '100px',
  },
};

export const Circle: Story = {
  args: {
    width: '100px',
    height: '100px',
    borderRadius: '50px',
  },
};
export const RedCircle: Story = {
  args: {
    width: '100px',
    height: '100px',
    borderRadius: '50px',
    backgroundColor: 'red',
    direction: 'top-to-bottom',
    shimmerColor: 'silver',
  },
};

export const BlueAndGold: Story = {
  args: {
    width: '500px',
    height: '10px',
    borderRadius: '50px',
    backgroundColor: 'blue',
    speed: 3,
    shimmerGradient: 'linear-gradient(90deg, transparent, gold, transparent)',
  },
};
