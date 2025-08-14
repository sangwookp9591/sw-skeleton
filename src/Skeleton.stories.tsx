import type { Meta, StoryObj } from '@storybook/react';
import Skeleton, { SkeletonProps } from './Skeleton';

const meta: Meta = {
    title: 'component/skeleton',
    component: Skeleton,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<SkeletonProps>;

export const Default: Story = {};
