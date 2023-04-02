import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import AddCommentForm from './AddCommentForm'
import 'app/styles/index.scss'
import { action } from '@storybook/addon-actions'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'features/AddCommentForm',
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