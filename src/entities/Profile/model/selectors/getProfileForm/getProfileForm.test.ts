import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileForm } from './getProfileForm'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

describe('getProfileForm.test', () => {
    test('should return form', () => {
        const form = {
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
                form
            }
        }

        expect(getProfileForm(state as StateSchema)).toEqual(form)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})
