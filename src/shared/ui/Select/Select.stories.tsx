import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Select } from './Select'
import 'app/styles/index.scss'

export default {
    title: 'shared/Select',
    component: Select
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
    label: 'Укажите значение',
    options: [
        { value: '1', content: 'Первый пункт' },
        { value: '2', content: 'Второй пункт' }
    ]
}
