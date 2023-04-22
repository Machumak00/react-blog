import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { NotificationItem } from './NotificationItem'
import 'app/styles/index.scss'

export default {
    title: '/NotificationItem',
    component: NotificationItem
} as ComponentMeta<typeof NotificationItem>

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />

export const Normal = Template.bind({})
Normal.args = {}
