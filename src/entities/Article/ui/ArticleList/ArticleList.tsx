import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { type Article, type ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton'
import { Loader } from 'shared/ui/Loader/Loader'

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = 'small',
        isLoading
    } = props
    const { t } = useTranslation()

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
        />
    )

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {
                articles.length > 0
                    ? articles.map(renderArticle)
                    : null
            }
            {isLoading && (<Loader/>)}
        </div>
    )
})
