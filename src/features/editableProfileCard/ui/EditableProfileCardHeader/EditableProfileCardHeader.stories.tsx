import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { EditableProfileCardHeader } from './EditableProfileCardHeader'
import '@/app/styles/index.scss'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'features/EditableProfileCardHeader',
    component: EditableProfileCardHeader
} as ComponentMeta<typeof EditableProfileCardHeader>

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => <EditableProfileCardHeader {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
