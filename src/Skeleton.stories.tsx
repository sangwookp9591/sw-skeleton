import type { Meta, StoryObj } from '@storybook/react';
import Skeleton, { SkeletonProps } from './Skeleton';

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
    },
};

export const Red: Story = {
    args: {
        width: '100px',
        height: '100px',
        borderRadius: '50px',
        backgroundColor: 'blue',
    },
};
