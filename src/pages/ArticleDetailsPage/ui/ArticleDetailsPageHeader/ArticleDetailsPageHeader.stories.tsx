import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader'
import 'app/styles/index.scss'

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader
} as ComponentMeta<typeof ArticleDetailsPageHeader>

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => <ArticleDetailsPageHeader {...args} />

export const Normal = Template.bind({})
Normal.args = {}
