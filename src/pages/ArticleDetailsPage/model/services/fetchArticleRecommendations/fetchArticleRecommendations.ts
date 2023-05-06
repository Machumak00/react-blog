import { createAsyncThunk } from '@reduxjs/toolkit';

import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { type Article } from '@/entities/Article';
import { useErrorMessage } from '@/shared/lib/hooks/useErrorMessage/useErrorMessage';

export const fetchArticleRecommendations = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
>('articleDetailsPage/fetchArticleRecommendations', async (props, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _limit: 4,
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
});
