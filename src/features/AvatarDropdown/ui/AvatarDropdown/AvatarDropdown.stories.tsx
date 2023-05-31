import { Meta, StoryObj } from '@storybook/react';

import { StateSchema } from '@/app/providers/StoreProvider';
import { User, UserRole } from '@/entities/User';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { AvatarDropdown } from './AvatarDropdown';

const user: User = {
    id: '1',
    roles: [UserRole.ADMIN],
    username: 'admin',
};

const initialState: DeepPartial<StateSchema> = {
    user: { authData: user },
};

const meta: Meta<typeof AvatarDropdown> = {
    title: 'features/AvatarDropdown/AvatarDropdown',
    component: AvatarDropdown,
    decorators: [StoreDecorator(initialState)],
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const Normal: Story = {
    args: {
        user: {
            id: '1',
        },
    },
};
