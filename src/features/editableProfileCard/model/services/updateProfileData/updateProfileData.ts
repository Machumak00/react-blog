import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { validateProfileData } from '../validateProfileData/validateProfileData'
import { type ProfileTypes } from 'entities/Profile'
import { ValidateProfileError } from '../../types/editableProfileCardSchema'

export const updateProfileData = createAsyncThunk<ProfileTypes, void, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI

        const formData = getProfileForm(getState())

        const errors = validateProfileData(formData)

        if (errors.length) {
            return rejectWithValue(errors)
        }

        try {
            const response = await extra.api.put<ProfileTypes>(
                `/profile/${formData?.id ?? ''}`,
                formData
            )

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue([ValidateProfileError.SERVER_ERROR])
        }
    }
)