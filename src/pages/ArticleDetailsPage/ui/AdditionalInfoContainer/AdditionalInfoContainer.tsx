import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getArticleDetailsData } from '@/entities/Article';
import { getRouteArticleEdit } from '@/shared/const/router';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';

import cls from './AdditionalInfoContainer.module.scss';

export const AdditionalInfoContainer = memo(() => {
    const article = useSelector(getArticleDetailsData);

    const navigate = useNavigate();

    const onEditArticle = useCallback(() => {
        if (article) {
            navigate(getRouteArticleEdit(article.id));
        }
    }, [article, navigate]);

    let content;

    if (!article) {
        content = (
            <VStack gap="32">
                <HStack gap="8">
                    <Skeleton width={32} height={32} borderRadius="50%" />
                    <Skeleton width={100} height={24} />
                    <Skeleton width={84} height={24} />
                </HStack>
                <Skeleton width={150} height={40} />
                <Skeleton width="100%" height={24} />
            </VStack>
        );
    } else {
        content = (
            <ArticleAdditionalInfo
                onEdit={onEditArticle}
                author={article.user}
                createdAt={article.createdAt}
                views={article.views}
            />
        );
    }

    return (
        <Card padding="24" border="partial" className={cls.card}>
            {content}
        </Card>
    );
});
