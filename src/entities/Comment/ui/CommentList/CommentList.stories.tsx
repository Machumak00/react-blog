import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { CommentList } from './CommentList'
import '@/app/styles/index.scss'

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />

export const Normal = Template.bind({})
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'comment 1',
            user: { id: '1', username: 'Misha' }
        },
        {
            id: '2',
            text: 'comment 2',
            user: { id: '2', username: 'Petr' }
        }
    ]
}

export const Loading = Template.bind({})
Loading.args = {
    comments: [],
    isLoading: true
}
