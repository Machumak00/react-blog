import { type StateSchema } from '@/app/providers/StoreProvider'

import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './articleDetails'

describe('articleDetailsData', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'Javascript news'
        }

        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data
            }
        }

        expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
    })
})

describe('articleDetailsError', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error'
            }
        }

        expect(getArticleDetailsError(state as StateSchema)).toEqual('error')
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined)
    })
})

describe('articleDetailsIsLoading', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true
            }
        }

        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(undefined)
    })
})
