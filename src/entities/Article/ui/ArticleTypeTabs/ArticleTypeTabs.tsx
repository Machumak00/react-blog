import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleTypeTabs.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useMemo } from 'react'
import { type TabItem, Tabs } from 'shared/ui/Tabs/Tabs'
import { ArticleType } from 'entities/Article'

interface ArticleTypeTabsProps {
    className?: string
    value: ArticleType
    onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const {
        className,
        value,
        onChangeType
    } = props
    const { t } = useTranslation()

    const typeTabs = useMemo<TabItem[]>(() => {
        return Object.values(ArticleType).map((articleType) => {
            return {
                value: articleType,
                content: t(articleType)
            }
        })
    }, [t])

    const onTabClick = useCallback((tab: TabItem) => {
        onChangeType(tab.value as ArticleType)
    }, [onChangeType])

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
            className={classNames('', {}, [className])}
        />
    )
})
