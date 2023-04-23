import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Avatar } from './Avatar'
import '@/app/styles/index.scss'
import AvatarImg from './avatar.jpg'

export default {
    title: 'shared/Avatar',
    component: Avatar
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {
    src: AvatarImg,
    size: 150
}

export const Small = Template.bind({})
Small.args = {
    src: AvatarImg,
    size: 50
}
