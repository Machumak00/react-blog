import { createAsyncThunk } from '@reduxjs/toolkit'

import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { type User, userActions } from '@/entities/User'
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage'
import { useErrorMessage } from '@/shared/lib/hooks/useErrorMessage/useErrorMessage'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        const {
            dispatch,
            extra,
            rejectWithValue
        } = thunkAPI

        try {
            const response = await extra.api.post<User>('/login', authData)

            if (!response.data) {
                throw new Error('Response data not found')
            }

            // Имитация авторизации с бэкенда
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))

            return response.data
        } catch (e) {
            const message = useErrorMessage(e)

            return rejectWithValue(message)
        }
    }
)
