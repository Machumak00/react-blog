import { Meta, StoryObj } from '@storybook/react'

import { AvatarDropdown } from './AvatarDropdown'
import '@/app/styles/index.scss'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { User, UserRole } from '@/entities/User'
import { StateSchema } from '@/app/providers/StoreProvider'

const user: User = {
    id: '1',
    roles: [UserRole.ADMIN],
    username: 'admin'
}

const initialState: DeepPartial<StateSchema> = {
    user: { authData: user }
}

const meta: Meta<typeof AvatarDropdown> = {
    title: 'features/avatarDropdown/AvatarDropdown',
    component: AvatarDropdown,
    decorators: [StoreDecorator(initialState)]
}

export default meta
type Story = StoryObj<typeof AvatarDropdown>

export const Normal: Story = {
    args: {
        user: {
            id: '1'
        }
    }
}
