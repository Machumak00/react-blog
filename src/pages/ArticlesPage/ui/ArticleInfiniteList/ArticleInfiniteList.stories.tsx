import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticleInfiniteList } from './ArticleInfiniteList'
import '@/app/styles/index.scss'

export default {
    title: 'pages/ArticlesPage/ArticleInfiniteList',
    component: ArticleInfiniteList
} as ComponentMeta<typeof ArticleInfiniteList>

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => <ArticleInfiniteList {...args} />

export const Normal = Template.bind({})
Normal.args = {}
