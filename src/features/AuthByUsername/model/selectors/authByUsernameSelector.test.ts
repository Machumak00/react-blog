import { StateSchema } from '@/app/providers/StoreProvider'

import { getLoginError, getLoginIsLoading, getLoginPassword, getLoginUsername } from './authByUsernameSelector'

describe('authByUsernameSelector.test', () => {
    describe('getLoginError', () => {
        test('should return error', () => {
            const state: DeepPartial<StateSchema> = {
                loginForm: {
                    error: 'error'
                }
            }

            expect(getLoginError(state as StateSchema)).toEqual('error')
        })

        test('should work with empty state', () => {
            const state: DeepPartial<StateSchema> = {}

            expect(getLoginError(state as StateSchema)).toEqual(undefined)
        })
    })

    describe('getLoginIsLoading', () => {
        test('should return true', () => {
            const state: DeepPartial<StateSchema> = {
                loginForm: {
                    isLoading: true
                }
            }

            expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
        })

        test('should work with empty state', () => {
            const state: DeepPartial<StateSchema> = {}

            expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
        })
    })

    describe('getLoginPassword', () => {
        test('should return error', () => {
            const state: DeepPartial<StateSchema> = {
                loginForm: {
                    password: '123'
                }
            }

            expect(getLoginPassword(state as StateSchema)).toEqual('123')
        })

        test('should work with empty state', () => {
            const state: DeepPartial<StateSchema> = {}

            expect(getLoginPassword(state as StateSchema)).toEqual('')
        })
    })

    describe('getLoginUsername', () => {
        test('should return error', () => {
            const state: DeepPartial<StateSchema> = {
                loginForm: {
                    username: 'test'
                }
            }

            expect(getLoginUsername(state as StateSchema)).toEqual('test')
        })

        test('should work with empty state', () => {
            const state: DeepPartial<StateSchema> = {}

            expect(getLoginUsername(state as StateSchema)).toEqual('')
        })
    })
})
