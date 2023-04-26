import { action } from '@storybook/addon-actions'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

import AddCommentForm from './AddCommentForm'

export default {
    title: 'features/AddCommentForm/AddCommentForm',
    component: AddCommentForm
} as ComponentMeta<typeof AddCommentForm>

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />

export const Normal = Template.bind({})
Normal.args = {
    onSendComment: action('onSendComment')
}
Normal.decorators = [
    StoreDecorator({})
]
