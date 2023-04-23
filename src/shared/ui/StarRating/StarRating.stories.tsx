import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { StarRating } from './StarRating'
import 'app/styles/index.scss'

export default {
    title: 'shared/StarRating',
    component: StarRating
} as ComponentMeta<typeof StarRating>

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />

export const Normal = Template.bind({})
Normal.args = {}
