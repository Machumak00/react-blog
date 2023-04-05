import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Page } from './Page'
import 'app/styles/index.scss'

export default {
    title: 'widgets/Page',
    component: Page
} as ComponentMeta<typeof Page>

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />

export const Normal = Template.bind({})
Normal.args = {}
