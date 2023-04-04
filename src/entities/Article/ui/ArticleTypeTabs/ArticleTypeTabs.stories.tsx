import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticleTypeTabs } from './ArticleTypeTabs'
import 'app/styles/index.scss'

export default {
    title: 'entities/ArticleTypeTabs',
    component: ArticleTypeTabs
} as ComponentMeta<typeof ArticleTypeTabs>

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args} />

export const Normal = Template.bind({})
Normal.args = {}
