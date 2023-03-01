import { Input } from './Input'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
    value: 'Value',
    placeholder: 'Placeholder'
}