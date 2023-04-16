import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import ArticleEditPage from './ArticleEditPage'
import 'app/styles/index.scss'

export default {
    title: 'pages/ArticleEditPage/ArticleEditPage',
    component: ArticleEditPage
} as ComponentMeta<typeof ArticleEditPage>

const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
