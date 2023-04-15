import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ListBox } from './ListBox'
import 'app/styles/index.scss'

export default {
    title: 'shared/ListBox',
    component: ListBox,
    decorators: [
        Story => <div style={{ padding: 150 }}><Story/></div>
    ]
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

export const topLeft = Template.bind({})
topLeft.args = {
    items: [
        { value: '1', content: 'test1' },
        { value: '2', content: 'test2', disabled: true },
        { value: '3', content: 'test3' }
    ],
    value: '1',
    direction: 'top left'
}

export const topRight = Template.bind({})
topRight.args = {
    items: [
        { value: '1', content: 'test1' },
        { value: '2', content: 'test2', disabled: true },
        { value: '3', content: 'test3' }
    ],
    value: '1',
    direction: 'top right'
}

export const bottomLeft = Template.bind({})
bottomLeft.args = {
    items: [
        { value: '1', content: 'test1' },
        { value: '2', content: 'test2', disabled: true },
        { value: '3', content: 'test3' }
    ],
    value: '1',
    direction: 'bottom left'
}

export const bottomRight = Template.bind({})
bottomRight.args = {
    items: [
        { value: '1', content: 'test1' },
        { value: '2', content: 'test2', disabled: true },
        { value: '3', content: 'test3' }
    ],
    value: '1',
    direction: 'bottom right'
}
