import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { AvatarDropdown } from './AvatarDropdown'
import '@/app/styles/index.scss'

export default {
    title: 'features/avatarDropdown/AvatarDropdown',
    component: AvatarDropdown
} as ComponentMeta<typeof AvatarDropdown>

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />

export const Normal = Template.bind({})
Normal.args = {}
