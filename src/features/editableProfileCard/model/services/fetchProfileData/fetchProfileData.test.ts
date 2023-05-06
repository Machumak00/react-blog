import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchProfileData } from './fetchProfileData';

const data: Profile = {
    id: '1',
    username: 'admin',
    age: 23,
    country: Country.Russia,
    lastname: 'Chumak',
    firstname: 'Mikhail',
    currency: Currency.RUB,
    city: 'Perm',
};

const profileDataProps = {
    profileId: '1',
    translations: {
        profileNotFound: 'Профиль не найден',
        responseDataNotFound: 'Не удалось загрузить данные профиля',
    },
};

describe('fetchProfileData.test', () => {
    test('should return fulfilled', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);

        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk(profileDataProps);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('should return rejected because of 403', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);

        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk(profileDataProps);

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Не удалось загрузить данные профиля');
    });
});
