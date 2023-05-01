import { type EntityState } from '@reduxjs/toolkit'

import { type Article, type ArticleSortField, type ArticleType, type ArticleView } from '@/entities/Article'
import { type SortOrder } from '@/shared/types/sort'

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean
    error?: string

    // пагинация
    page: number
    limit: number
    hasMore: boolean

    // фильтры
    view: ArticleView
    order: SortOrder
    sort: ArticleSortField
    search: string
    type: ArticleType

    _mounted: boolean
}
