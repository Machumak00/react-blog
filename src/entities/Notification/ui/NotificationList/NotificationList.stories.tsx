import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { NotificationList } from './NotificationList'
import 'app/styles/index.scss'

export default {
    title: '/NotificationList',
    component: NotificationList
} as ComponentMeta<typeof NotificationList>

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />

export const Normal = Template.bind({})
Normal.args = {}
