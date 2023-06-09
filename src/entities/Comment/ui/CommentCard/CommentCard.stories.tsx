import { Meta, StoryObj } from '@storybook/react';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

const normalArgs = {
    comment: {
        id: '1',
        text: 'comment 1',
        user: {
            id: '1',
            username: 'Misha',
        },
    },
};

export const Normal: Story = {
    args: normalArgs,
};

export const NormalRedesigned: Story = {
    args: normalArgs,
    decorators: [NewDesignDecorator],
};

const loadingArgs = {
    comment: {
        id: '1',
        text: 'comment 1',
        user: {
            id: '1',
            username: 'Misha',
        },
    },
    isLoading: true,
};

export const Loading: Story = {
    args: loadingArgs,
};

export const LoadingRedesigned: Story = {
    args: loadingArgs,
    decorators: [NewDesignDecorator],
};
