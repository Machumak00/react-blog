import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Popover } from './Popover'
import '@/app/styles/index.scss'

export default {
    title: 'shared/Popover',
    component: Popover
} as ComponentMeta<typeof Popover>

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />

export const Normal = Template.bind({})
Normal.args = {}
