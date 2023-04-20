import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import { useTranslation } from 'react-i18next'
import { type HTMLAttributeAnchorTarget, memo } from 'react'
import { type Article, type ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { List, type ListRowProps, WindowScroller } from 'react-virtualized'
import { PAGE_ID } from 'widgets/Page/ui/Page'
import { Loader } from 'shared/ui/Loader/Loader'

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
    virtualized?: boolean
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = 'small',
        isLoading,
        target,
        virtualized = true
    } = props
    const { t } = useTranslation()

    const isBig = view === 'big'
    const itemsPerRow = isBig ? 1 : 3
    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow)

    const rowRenderer = ({
        index,
        isScrolling,
        key,
        style
    }: ListRowProps) => {
        const items = []
        const fromIndex = index * itemsPerRow
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length)

        for (let i = fromIndex; i < toIndex; i++) {
            items.push(
                <ArticleListItem
                    article={articles[i]}
                    view={view}
                    className={cls.card}
                    target={target}
                    key={articles[i].id}
                />
            )
        }

        return (
            <div
                key={key}
                style={style}
                className={cls.row}
            >
                {items}
            </div>
        )
    }

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')}/>
            </div>
        )
    }

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <WindowScroller
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({
                width,
                height,
                registerChild,
                onChildScroll,
                scrollTop,
                isScrolling
            }) => (
                <div
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    ref={registerChild}
                    className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                >
                    {virtualized
                        ? (
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-expect-error
                            <List
                                autoHeight
                                rowCount={rowCount}
                                height={height ?? 700}
                                rowHeight={isBig ? 700 : 330}
                                rowRenderer={rowRenderer}
                                width={width ? width - 80 : 700}
                                onScroll={onChildScroll}
                                isScrolling={isScrolling}
                                scrollTop={scrollTop}
                            />
                        )
                        : (
                            articles.map(article => (
                                <ArticleListItem
                                    article={article}
                                    view={view}
                                    target={target}
                                    key={article.id}
                                    className={cls.card}
                                />
                            ))
                        )}
                    {isLoading && (<Loader className={cls.loader}/>)}
                </div>
            )}
        </WindowScroller>
    )
})
