import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

import { initArticlesPage } from './initArticlesPage'

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('initArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _mounted: false
            }
        })
        const searchParams = new URLSearchParams()

        await thunk.callThunk(searchParams)

        expect(thunk.dispatch).toBeCalledTimes(8)
        expect(fetchArticlesList).toHaveBeenCalled()
    })

    test('fetchArticlesList not called', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _mounted: true
            }
        })
        const searchParams = new URLSearchParams()

        await thunk.callThunk(searchParams)

        expect(thunk.dispatch).toBeCalledTimes(2)
        expect(fetchArticlesList).not.toHaveBeenCalled()
    })
})
