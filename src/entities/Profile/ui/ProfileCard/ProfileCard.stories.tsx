import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import Avatar from 'shared/assets/tests/avatar.jpg'

export default {
    title: 'entities/Profile/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
    data: {
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

export const WithError = Template.bind({})
WithError.args = {
    error: 'true'
}

export const Loading = Template.bind({})
Loading.args = {
    isLoading: true
}
