import { type StateSchema } from '@/app/providers/StoreProvider';

import { ValidateProfileError } from '../../consts/consts';

import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
    test('should return validateErrors', () => {
        const validateErrors = [
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_USER_DATA,
        ];

        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors,
            },
        };

        expect(getProfileValidateErrors(state as StateSchema)).toEqual(
            validateErrors,
        );
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileValidateErrors(state as StateSchema)).toEqual(
            undefined,
        );
    });
});
