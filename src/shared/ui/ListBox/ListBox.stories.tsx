import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ListBox } from './ListBox'
import 'app/styles/index.scss'

export default {
    title: 'shared/ListBox',
    component: ListBox
} as ComponentMeta<typeof ListBox>

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />

export const Normal = Template.bind({})
Normal.args = {
    items: [
        { value: '1', content: 'test1' },
        { value: '2', content: 'test2', disabled: true },
        { value: '3', content: 'test3' }
    ],
    value: '1'
}

export const Readonly = Template.bind({})
Readonly.args = {
    items: [
        { value: '1', content: 'test1' },
        { value: '2', content: 'test2', disabled: true },
        { value: '3', content: 'test3' }
    ],
    value: '1',
    readonly: true
}

export const DirectionTop = Template.bind({})
DirectionTop.args = {
    items: [
        { value: '1', content: 'test1' },
        { value: '2', content: 'test2', disabled: true },
        { value: '3', content: 'test3' }
    ],
    value: '1',
    direction: 'top'
}
