import { createAsyncThunk } from '@reduxjs/toolkit'

import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { type Article, ArticleType } from '@/entities/Article'
import { useErrorMessage } from '@/shared/lib/hooks/useErrorMessage/useErrorMessage'
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams'

import {
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType
} from '../../selectors/articlesPageSelectors'

interface FetchArticlesListProps {
    replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async (props, thunkAPI) => {
        const {
            extra,
            rejectWithValue,
            getState
        } = thunkAPI
        const page = getArticlesPageNum(getState())
        const limit = getArticlesPageLimit(getState())
        const sort = getArticlesPageSort(getState())
        const order = getArticlesPageOrder(getState())
        const search = getArticlesPageSearch(getState())
        const type = getArticlesPageType(getState())

        try {
            addQueryParams({
                sort,
                order,
                search,
                type
            })

            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type_like: type === ArticleType.ALL ? undefined : type
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
