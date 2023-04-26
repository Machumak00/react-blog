import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import { useTranslation } from 'react-i18next'
import { type HTMLAttributeAnchorTarget, memo } from 'react'
import { type Article, type ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { Text, TextSize } from '@/shared/ui/Text'
import { Loader } from '@/shared/ui/Loader'

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = 'small',
        isLoading,
        target
    } = props
    const { t } = useTranslation()

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')}/>
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.map(article => (
                <ArticleListItem
                    article={article}
                    view={view}
                    target={target}
                    key={article.id}
                    className={cls.card}
                />
            ))}
            {isLoading && (<Loader className={cls.loader}/>)}
        </div>
    )
})
