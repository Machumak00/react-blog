import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { CountrySelect } from './CountrySelect'
import '@/app/styles/index.scss'

export default {
    title: 'entities/CountrySelect',
    component: CountrySelect
} as ComponentMeta<typeof CountrySelect>

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />

export const Primary = Template.bind({})
Primary.args = {}
