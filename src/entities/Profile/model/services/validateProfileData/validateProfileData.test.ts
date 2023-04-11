import { validateProfileData } from './validateProfileData'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { ValidateProfileError } from '../../types/profileTypes'

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
        const result = validateProfileData(data)

        expect(result).toEqual([])
    })

    test('without firstname and lastname', async () => {
        const result = validateProfileData({ ...data, firstname: '', lastname: '' })

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    })

    test('without age', async () => {
        const result = validateProfileData({ ...data, age: undefined })

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
    })

    test('without country', async () => {
        const result = validateProfileData({ ...data, country: undefined })

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY])
    })

    test('empty profile', async () => {
        const result = validateProfileData(undefined)

        expect(result).toEqual([ValidateProfileError.NO_DATA])
    })

    test('empty profile', async () => {
        const result = validateProfileData({})

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY
        ])
    })
})
