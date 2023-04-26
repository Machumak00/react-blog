import { Meta, StoryObj } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

import { NotificationList } from './NotificationList'

const meta: Meta<typeof NotificationList> = {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    decorators: [StoreDecorator({})]
}

export default meta
type Story = StoryObj<typeof NotificationList>

export const Normal: Story = {
    parameters: {
        mockData: [
            {
                url: __API__ + '/notifications',
                method: 'GET',
                status: 200,
                response: [
                    {
                        id: '1',
                        title: 'Уведомление 1',
                        description: 'Описание уведомления 1'
                    },
                    {
                        id: '2',
                        title: 'Уведомление 3',
                        description: 'Описание уведомления 2'
                    },
                    {
                        id: '3',
                        title: 'Уведомление 3',
                        description: 'Описание уведомления 3'
                    }
                ]
            }
        ]
    }
}
