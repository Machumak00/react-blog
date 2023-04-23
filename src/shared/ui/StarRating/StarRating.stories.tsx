import { Meta, StoryObj } from '@storybook/react'
import { StarRating } from './StarRating'
import 'app/styles/index.scss'

const meta: Meta<typeof StarRating> = {
    title: 'shared/StarRating',
    component: StarRating
}

export default meta
type Story = StoryObj<typeof StarRating>

export const Normal: Story = {
    args: {}
}
