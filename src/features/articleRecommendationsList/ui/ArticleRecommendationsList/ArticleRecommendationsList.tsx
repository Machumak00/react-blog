import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { ArticleList } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Skeleton } from '@/shared/ui/Skeleton'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text, TextSize, TextTheme } from '@/shared/ui/Text'

import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi'

interface ArticleRecommendationsListProps {
    className?: string
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props
    const { t } = useTranslation()
    const { data: articles, isLoading, error } = useArticleRecommendationsList(3)

    if (isLoading) {
        return (
            <VStack gap={'16'}>
                <Skeleton height={40} width={200}/>
                <HStack gap={'32'} className={classNames('', {}, [className])}>
                    <Skeleton height={300} width={230}/>
                    <Skeleton height={300} width={230}/>
                    <Skeleton height={300} width={230}/>
                </HStack>
            </VStack>
        )
    }

    if (error || !articles) {
        return (
            <VStack gap={'8'} className={classNames('', {}, [className])}>
                <Text
                    size={TextSize.L}
                    title={t('Рекомендуем')}
                />
                <Text
                    size={TextSize.M}
                    theme={TextTheme.ERROR}
                    title={t('Статьи не найдены')}
                />
            </VStack>
        )
    }

    return (
        <VStack gap={'8'} className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Рекомендуем')}
            />
            <ArticleList
                articles={articles}
                target="_blank"
            />
        </VStack>
    )
})
