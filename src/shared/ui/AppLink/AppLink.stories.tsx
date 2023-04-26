import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { AppLink, AppLinkTheme } from './AppLink'

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Secondary = Template.bind({})
Secondary.args = {
    children: 'Text',
    theme: AppLinkTheme.INVERTED
}

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
    children: 'Text',
    theme: AppLinkTheme.INVERTED
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
