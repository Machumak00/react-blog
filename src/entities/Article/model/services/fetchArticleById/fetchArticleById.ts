import { createAsyncThunk } from '@reduxjs/toolkit'

import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { useErrorMessage } from '@/shared/lib/hooks/useErrorMessage/useErrorMessage'

import { type Article } from '../../types/article'

export const fetchArticleById = createAsyncThunk<Article, string | undefined, ThunkConfig<string>>(
    'articleDetails/fetchArticleById',
    async (articleId, thunkAPI) => {
        const {
            extra,
            rejectWithValue
        } = thunkAPI

        try {
            if (!articleId) {
                throw new Error('Article id not found')
            }

            const response = await extra.api.get<Article>(`/articles/${articleId}`, {
                params: {
                    _expand: 'user'
                }
            })

            if (!response.data) {
                throw new Error('Response data not found')
            }

            return response.data
        } catch (e) {
            const message = useErrorMessage(e)

            return rejectWithValue(message)
        }
    }
)
