import { type ActionReducerMapBuilder, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ProfileTypes, type ProfileSchema } from '../types/profileTypes'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload
        },
        cancelEdit: (state) => {
            state.readonly = true
            state.validateErrors = undefined
            state.form = state.data
        },
        updateProfile: (state, action: PayloadAction<ProfileTypes>) => {
            state.form = {
                ...state.form,
                ...action.payload
            }
        }
    },
    extraReducers: (builder: ActionReducerMapBuilder<any>) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(
                fetchProfileData.fulfilled,
                (state, action: PayloadAction<ProfileTypes>
                ) => {
                    state.isLoading = false
                    state.data = action.payload
                    state.form = action.payload
                })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(updateProfileData.pending, (state) => {
                state.validateErrors = undefined
                state.isLoading = true
            })
            .addCase(
                updateProfileData.fulfilled,
                (state, action: PayloadAction<ProfileTypes>
                ) => {
                    state.isLoading = false
                    state.data = action.payload
                    state.form = action.payload
                    state.readonly = true
                    state.validateErrors = undefined
                })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.validateErrors = action.payload
            })
    }
})

export const {
    actions: profileActions,
    reducer: profileReducer
} = profileSlice
