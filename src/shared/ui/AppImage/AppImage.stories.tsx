import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { AppImage } from './AppImage'
import 'app/styles/index.scss'

export default {
    title: '/AppImage',
    component: AppImage
} as ComponentMeta<typeof AppImage>

const Template: ComponentStory<typeof AppImage> = (args) => <AppImage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
