import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { CommentCard } from './CommentCard'
import '@/app/styles/index.scss'

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />

export const Normal = Template.bind({})
Normal.args = {
    comment: {
        id: '1',
        text: 'comment 1',
        user: { id: '1', username: 'Misha' }
    }
}

export const Loading = Template.bind({})
Loading.args = {
    comment: {
        id: '1',
        text: 'comment 1',
        user: { id: '1', username: 'Misha' }
    },
    isLoading: true
}
