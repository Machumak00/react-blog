import { createAsyncThunk } from '@reduxjs/toolkit';

import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';
import { useErrorMessage } from '@/shared/lib/hooks/useErrorMessage/useErrorMessage';

import { getJsonSettingsQuery } from '../../api/userApi';
import { User } from '../types/user';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuthData',
    async (_, thunkAPI) => {
        const { rejectWithValue, dispatch } = thunkAPI;

        const userId = localStorage.getItem(USER_LOCAL_STORAGE_KEY);

        try {
            if (!userId) {
                throw new Error('User not found');
            }

            return await dispatch(getJsonSettingsQuery(userId)).unwrap();
        } catch (e) {
            const message = useErrorMessage(e);

            return rejectWithValue(message);
        }
    },
);
