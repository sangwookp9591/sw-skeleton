import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

const meta: Meta<ButtonProps> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked' },
        variant: {
            control: { type: 'radio' },
            options: ['primary', 'secondary'],
        },
        disabled: { control: 'boolean' },
        label: { control: 'text' },
        children: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Default: Story = {
    args: {
        label: '기본 버튼',
    },
};

export const Primary: Story = {
    args: {
        label: 'Primary 버튼',
        variant: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        label: 'Secondary 버튼',
        variant: 'secondary',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled 버튼',
        disabled: true,
    },
};

export const WithChildren: Story = {
    args: {
        label: '버튼 + ',
        children: <span>🎉</span>,
    },
};
