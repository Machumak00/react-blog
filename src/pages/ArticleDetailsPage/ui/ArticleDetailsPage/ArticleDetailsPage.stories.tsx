import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import ArticleDetailsPage from './ArticleDetailsPage'
import 'app/styles/index.scss'

export default {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage
} as ComponentMeta<typeof ArticleDetailsPage>

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
