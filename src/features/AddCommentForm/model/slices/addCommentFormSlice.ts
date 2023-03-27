import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type AddCommentFormSchema } from '../types/addCommentForm'

const initialState: AddCommentFormSchema = {
    text: ''
}

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        }
    }
    // extraReducers: (builder: ActionReducerMapBuilder<any>) => {
    //     builder
    //         .addCase(loginByUsername.pending, (state) => {
    //             state.error = undefined
    //             state.isLoading = true
    //         }).addCase(loginByUsername.fulfilled, (state, action) => {
    //             state.isLoading = false
    //         }).addCase(loginByUsername.rejected, (state, action) => {
    //             state.isLoading = false
    //             state.error = action.payload
    //         })
    // }
})

export const {
    actions: addCommentFormActions,
    reducer: addCommentFormReducer
} = addCommentFormSlice
