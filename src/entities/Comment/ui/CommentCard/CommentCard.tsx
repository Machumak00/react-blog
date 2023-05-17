import { memo } from 'react';

import { getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { Text } from '@/shared/ui/deprecated/Text';


import { type Comment } from '../../model/types/comment';

import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <VStack
                data-testid={'CommentCard.Loading'}
                gap={'8'}
                max
                className={classNames(cls.CommentCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <HStack gap={'4'} className={cls.header}>
                    <Skeleton width={30} height={30} borderRadius={'50%'} />
                    <Skeleton className={cls.username} width={66} height={32} />
                </HStack>
                <Skeleton className={cls.text} width={'100%'} height={50} />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack
            data-testid={'CommentCard.Content'}
            gap={'8'}
            max
            className={classNames(cls.CommentCard, {}, [className])}
        >
            <AppLink
                to={getRouteProfile(comment.user.id)}
                className={cls.header}
            >
                {comment.user.avatar ? (
                    <Avatar size={30} src={comment.user.avatar} />
                ) : null}
                <Text className={cls.username} title={comment.user.username} />
            </AppLink>
            <Text className={cls.text} text={comment.text} />
        </VStack>
    );
});
