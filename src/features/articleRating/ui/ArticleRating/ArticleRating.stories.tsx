import { Meta, StoryObj } from '@storybook/react'
import ArticleRating from './ArticleRating'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Article } from '@/entities/Article'
import { User } from '@/entities/User'
import { StateSchema } from '@/app/providers/StoreProvider'

const user: User = {
    id: '1'
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

const meta: Meta<typeof ArticleRating> = {
    title: 'features/articleRating/ArticleRating',
    component: ArticleRating,
    decorators: [StoreDecorator(initialState)]
}

export default meta
type Story = StoryObj<typeof ArticleRating>

export const Normal: Story = {
    args: {
        articleId: '1'
    },
    parameters: {
        mockData: [
            {
                url: __API__ + `/article-ratings?userId=${user.id}&articleId=${article.id}`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        rate: 4
                    }
                ]
            }
        ]
    }
}

export const WithoutRate: Story = {
    args: {
        articleId: article.id
    },
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
                response: []
            }
        ]
    }
}
