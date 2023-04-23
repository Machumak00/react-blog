import { Meta, StoryObj } from '@storybook/react'
import ArticleRating from './ArticleRating'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Article } from '@/entities/Article'
import { User, UserRole } from '@/entities/User'
import { StateSchema } from '@/app/providers/StoreProvider'

const meta: Meta<typeof ArticleRating> = {
    title: 'features/ArticleRating',
    component: ArticleRating
}

export default meta
type Story = StoryObj<typeof ArticleRating>

const user: User = {
    id: '1',
    username: 'admin',
    roles: [UserRole.ADMIN],
    avatar: ''
}

const article: Article = {
    id: '1',
    title: '',
    subtitle: '',
    img: '',
    views: 1,
    createdAt: '',
    type: [],
    user,
    blocks: []
}

const initialState: DeepPartial<StateSchema> = {
    user: { authData: user },
    articleDetails: { data: article }
}

export const Normal: Story = {
    args: {
        articleId: article.id
    },
    decorators: [StoreDecorator(initialState)],
    parameters: {
        mockData: [
            {
                url: __API__ + `/article-ratings?userId=${user.id}&articleId=${article.id}`,
                method: 'GET',
                status: 200,
                response: []
            },
            {
                url: __API__ + '/article-ratings',
                method: 'POST',
                status: 201,
                body: {
                    articleId: '1',
                    rate: 3,
                    userId: '1'
                },
                response: [
                    {}
                ]
            }
        ]
    }
}
