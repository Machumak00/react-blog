import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileData } from './getProfileData'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

describe('getProfileData.test', () => {
    test('should return error', () => {
        const data = {
            username: 'admin',
            age: 23,
            country: Country.Russia,
            lastname: 'Chumak',
            firstname: 'Mikhail',
            currency: Currency.RUB,
            city: 'Perm'
        }

        const state: DeepPartial<StateSchema> = {
            profile: {
                data
            }
        }

        expect(getProfileData(state as StateSchema)).toEqual(data)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})
