import { type Article } from '../types/article'
import { type ArticleDetailsSchema } from '../types/articleDetailsSchema'
import { articleDetailsReducer } from './articleDetailsSlice'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { ArticleType } from '../types/article'

const data: Article = {
    id: '1',
    title: 'title',
    type: [ArticleType.IT],
    createdAt: '16.03.2023',
    subtitle: 'subtitle',
    img: '',
    user: {
        id: '1',
        username: 'admin'
    },
    views: 12,
    blocks: []
}

describe('profileSlice.test', () => {
    test('test update profile service pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false
        }

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.pending
        )).toEqual({
            isLoading: true,
            validateErrors: undefined
        })
    })

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = { isLoading: false }

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.fulfilled(data, '', '')
        )).toEqual({
            isLoading: false,
            data
        })
    })
})
