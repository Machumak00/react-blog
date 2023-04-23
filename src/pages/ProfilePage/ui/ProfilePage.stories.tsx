import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import '@/app/styles/index.scss'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import Avatar from '@/shared/assets/tests/avatar.jpg'

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 23,
            country: Country.Russia,
            lastname: 'Chumak',
            firstname: 'Mikhail',
            currency: Currency.RUB,
            city: 'Perm',
            avatar: Avatar
        }
    }
})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 23,
            country: Country.Russia,
            lastname: 'Chumak',
            firstname: 'Mikhail',
            currency: Currency.RUB,
            city: 'Perm',
            avatar: Avatar
        }
    }
})]
