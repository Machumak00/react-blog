import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { getArticlesPageMounted } from '../../selectors/articlesPageSelectors'
import { articlesPageActions } from '../../slices/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { type SortOrder } from '@/shared/types'
import { type ArticleSortField, ArticleType } from '@/entities/Article'

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkAPI) => {
        const { dispatch, getState } = thunkAPI
        const mounted = getArticlesPageMounted(getState())

        if (mounted) {
            return
        }

        dispatch(articlesPageActions.setOrder(searchParams.get('order') as SortOrder ?? ''))
        dispatch(articlesPageActions.setSort(searchParams.get('sort') as ArticleSortField ?? ''))
        dispatch(articlesPageActions.setSearch(searchParams.get('search') ?? ''))
        dispatch(articlesPageActions.setType(searchParams.get('type') as ArticleType ?? ArticleType.ALL))

        dispatch(articlesPageActions.initState())
        dispatch(fetchArticlesList({}))
    }
)
