import { Meta, StoryObj } from '@storybook/react';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import { User, UserRole } from '@/entities/User';
import { ProfileSchema } from '@/features/editableProfileCard';
import Avatar from '@/shared/assets/tests/avatar.jpg';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import ProfilePage from './ProfilePage';

const user: User = {
    id: '1',
    username: 'admin',
    avatar: Avatar,
    roles: [UserRole.ADMIN],
};

const profile: Profile = {
    id: user.id,
    username: 'admin',
    age: 32,
    country: Country.Russia,
    lastname: 'Adminov',
    firstname: 'Admin',
    currency: Currency.RUB,
    city: 'Moscow',
    avatar: Avatar,
};

const profileSchema: ProfileSchema = {
    form: profile,
    isLoading: false,
    readonly: true,
};

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    decorators: [
        StoreDecorator({
            profile: profileSchema,
            user: {
                authData: user,
            },
        }),
    ],
    parameters: {
        mockData: [
            {
                url: __API__ + `/profile-ratings?userId=${user.id}`,
                method: 'GET',
                status: 200,
                response: [],
            },
            {
                url: __API__ + '/profile-ratings',
                method: 'POST',
                status: 201,
                body: {
                    rate: 5,
                    userId: '1',
                },
                response: [],
            },
        ],
    },
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
