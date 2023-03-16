import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Code } from './Code'
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Code',
    component: Code
} as ComponentMeta<typeof Code>

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />

const testText = 'import { type ComponentMeta, type ComponentStory } from \'@storybook/react\'\n' +
    '\n' +
    'import { Code } from \'./Code\'\n' +
    'import \'app/styles/index.scss\'\n' +
    '\n' +
    'export default {\n' +
    '    title: \'shared/Code\',\n' +
    '    component: Code\n' +
    '} as ComponentMeta<typeof Code>\n' +
    '\n' +
    'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />\n' +
    '\n' +
    'export const Normal = Template.bind({})\n' +
    'Normal.args = {\n' +
    '    children: \n' +
    '}'

export const Normal = Template.bind({})
Normal.args = {
    text: testText
}

export const Dark = Template.bind({})
Dark.args = {
    text: testText
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
