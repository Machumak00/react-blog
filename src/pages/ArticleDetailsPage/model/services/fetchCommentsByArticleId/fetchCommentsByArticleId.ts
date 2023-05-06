import { createAsyncThunk } from '@reduxjs/toolkit';

import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { type Comment } from '@/entities/Comment';
import { useErrorMessage } from '@/shared/lib/hooks/useErrorMessage/useErrorMessage';

export const fetchCommentsByArticleId = createAsyncThunk<
    Comment[],
    string | undefined,
    ThunkConfig<string>
>(
    'articleDetailsPage/fetchCommentsByArticleId',
    async (articleId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            if (!articleId) {
                throw new Error('Article id not found');
            }

            const response = await extra.api.get<Comment[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user',
                },
            });

            if (!response.data) {
                throw new Error('Response data not found');
            }

            return response.data;
        } catch (e) {
            const message = useErrorMessage(e);

            return rejectWithValue(message);
        }
    },
);
