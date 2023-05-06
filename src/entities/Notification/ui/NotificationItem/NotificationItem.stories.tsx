import { Meta, StoryObj } from '@storybook/react';

import { NotificationItem } from './NotificationItem';

const meta: Meta<typeof NotificationItem> = {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Normal: Story = {
    args: {
        item: {
            id: '1',
            title: 'Уведомление',
            description: 'Описание уведомления',
        },
    },
};
