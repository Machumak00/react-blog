import { Meta, StoryObj } from '@storybook/react';

import { StateSchema } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';
import { User, UserRole } from '@/entities/User';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import ProfileRating from './ProfileRating';

const meta: Meta<typeof ProfileRating> = {
    title: 'features/ProfileRating/ProfileRating',
    component: ProfileRating,
};

export default meta;
type Story = StoryObj<typeof ProfileRating>;

const user: User = {
    id: '1',
    username: 'admin',
    roles: [UserRole.ADMIN],
    avatar: '',
};

const profileId = '1';

const profile: Profile = {
    id: profileId,
};

const initialState: DeepPartial<StateSchema> = {
    user: { authData: user },
    articleDetails: { data: profile },
};

export const Normal: Story = {
    args: {
        profileId,
    },
    decorators: [StoreDecorator(initialState)],
    parameters: {
        mockData: [
            {
                url:
                    __API__ +
                    `/profile-ratings?userId=${user.id}&profileId=${profileId}`,
                method: 'GET',
                status: 200,
                response: [],
            },
            {
                url: __API__ + '/profile-ratings',
                method: 'POST',
                status: 201,
                body: {
                    articleId: '1',
                    rate: 3,
                    userId: '1',
                },
                response: [],
            },
        ],
    },
};
