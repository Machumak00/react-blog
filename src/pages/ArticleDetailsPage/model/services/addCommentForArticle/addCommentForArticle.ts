import { createAsyncThunk } from '@reduxjs/toolkit';

import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticleDetailsData } from '@/entities/Article';
import { type Comment } from '@/entities/Comment';
import { getUserAuthData } from '@/entities/User';
import { useErrorMessage } from '@/shared/lib/hooks/useErrorMessage/useErrorMessage';

import { fetchCommentsByArticleId } from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>('articleDetailsPage/addCommentForArticle', async (text, thunkAPI) => {
    const { dispatch, extra, rejectWithValue, getState } = thunkAPI;

    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !text || !article) {
        return rejectWithValue('no data');
    }

    try {
        const response = await extra.api.post<Comment>('/comments', {
            articleId: article.id,
            userId: userData.id,
            text,
        });

        if (!response.data) {
            throw new Error('Response data not found');
        }

        dispatch(fetchCommentsByArticleId(article.id));

        return response.data;
    } catch (e) {
        const message = useErrorMessage(e);

        return rejectWithValue(message);
    }
});
