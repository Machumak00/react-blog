import { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { AppLink } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: 'Text',
        variant: 'primary',
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'Text',
        variant: 'primary',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Secondary: Story = {
    args: {
        children: 'Text',
        variant: 'red',
    },
};

export const SecondaryDark: Story = {
    args: {
        children: 'Text',
        variant: 'red',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
