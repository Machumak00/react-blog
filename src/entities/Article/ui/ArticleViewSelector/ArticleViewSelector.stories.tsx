import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticleViewSelector } from './ArticleViewSelector'
import '@/app/styles/index.scss'

export default {
    title: 'entities/Article/ArticleViewSelector',
    component: ArticleViewSelector
} as ComponentMeta<typeof ArticleViewSelector>

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />

export const Normal = Template.bind({})
Normal.args = {}
