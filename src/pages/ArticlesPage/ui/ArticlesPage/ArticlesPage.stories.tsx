import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import ArticlesPage from './ArticlesPage'
import 'app/styles/index.scss'

export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage
} as ComponentMeta<typeof ArticlesPage>

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
