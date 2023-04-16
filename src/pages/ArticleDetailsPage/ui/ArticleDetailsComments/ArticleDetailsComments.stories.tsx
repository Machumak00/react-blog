import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticleDetailsComments } from './ArticleDetailsComments'
import 'app/styles/index.scss'

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments
} as ComponentMeta<typeof ArticleDetailsComments>

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => <ArticleDetailsComments {...args} />

export const Normal = Template.bind({})
Normal.args = {}
