import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { NotificationButton } from './NotificationButton'
import 'app/styles/index.scss'

export default {
    title: '/NotificationButton',
    component: NotificationButton
} as ComponentMeta<typeof NotificationButton>

const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton {...args} />

export const Normal = Template.bind({})
Normal.args = {}
