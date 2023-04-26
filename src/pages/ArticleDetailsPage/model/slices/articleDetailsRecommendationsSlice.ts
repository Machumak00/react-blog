import { type ActionReducerMapBuilder, createEntityAdapter, createSlice } from '@reduxjs/toolkit'

import { type StateSchema } from '@/app/providers/StoreProvider'
import { type Article } from '@/entities/Article'

import {
    fetchArticleRecommendations
} from '../services/fetchArticleRecommendations/fetchArticleRecommendations'
import { type ArticleDetailsRecommendationsSchema } from '../types/ArticleDetailsRecommendationsSchema'

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id
})

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
)

const articleDetailsRecommendationsSlice = createSlice({
    name: 'articleDetailsRecommendationsSlice',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<any>) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
                state.isLoading = false
                recommendationsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const {
    reducer: articleDetailsRecommendationsReducer,
    actions: articleDetailsRecommendationsActions
} = articleDetailsRecommendationsSlice
