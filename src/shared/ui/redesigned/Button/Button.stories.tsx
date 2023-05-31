import { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/redesigned/Button',
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
    args: {
        children: 'Text',
        variant: 'clear',
    },
};

export const ClearSizeL: Story = {
    args: {
        children: 'Text',
        variant: 'clear',
        size: 'l',
    },
};

export const ClearSizeXL: Story = {
    args: {
        children: 'Text',
        variant: 'clear',
        size: 'xl',
    },
};

export const ClearDark: Story = {
    args: {
        children: 'Text',
        variant: 'clear',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Outline: Story = {
    args: {
        children: 'Text',
        variant: 'outline',
    },
};

export const OutlineSizeL: Story = {
    args: {
        children: 'Text',
        variant: 'outline',
        size: 'l',
    },
};

export const OutlineSizeXL: Story = {
    args: {
        children: 'Text',
        variant: 'outline',
        size: 'xl',
    },
};

export const OutlineDark: Story = {
    args: {
        children: 'Text',
        variant: 'outline',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareSizeM: Story = {
    args: {
        children: '>',
        variant: 'outline',
        square: true,
        size: 'm',
    },
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        variant: 'outline',
        square: true,
        size: 'l',
    },
};

export const SquareSizeXL: Story = {
    args: {
        children: '>',
        variant: 'outline',
        square: true,
        size: 'xl',
    },
};

export const Disabled: Story = {
    args: {
        children: 'Text',
        variant: 'outline',
        disabled: true,
    },
};
