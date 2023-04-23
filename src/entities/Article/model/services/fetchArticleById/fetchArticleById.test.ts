import { fetchArticleById } from './fetchArticleById'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

const data = {
    id: '1',
    title: 'Some title'
}

describe('fetchArticleById.test', () => {
    test('should return fulfilled', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById)

        thunk.api.get.mockReturnValue(Promise.resolve({ data }))
        const result = await thunk.callThunk(data.id)

        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('should return rejected because of 403', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById)

        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk(data.id)

        expect(result.meta.requestStatus).toBe('rejected')
    })
})
