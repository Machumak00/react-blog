
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

import { fetchProfileData } from './fetchProfileData'

const data = {
    username: 'admin',
    age: 23,
    country: Country.Russia,
    lastname: 'Chumak',
    firstname: 'Mikhail',
    currency: Currency.RUB,
    city: 'Perm'
}

describe('fetchProfileData.test', () => {
    test('should return fulfilled', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)

        thunk.api.get.mockReturnValue(Promise.resolve({ data }))
        const result = await thunk.callThunk('1')

        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('should return rejected because of 403', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)

        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk('1')

        expect(result.meta.requestStatus).toBe('rejected')
    })
})
