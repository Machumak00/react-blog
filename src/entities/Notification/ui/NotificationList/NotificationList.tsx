import { memo } from 'react';

import { toggleFeatures } from '@/shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';

import { useGetNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';


interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;

    const { data, isLoading } = useGetNotifications(undefined, {
        pollingInterval: 5000,
    });

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

    if (isLoading) {
        return (
            <VStack gap={'16'} className={className}>
                <Skeleton width={'100%'} borderRadius={'8px'} height={'80px'} />
                <Skeleton width={'100%'} borderRadius={'8px'} height={'80px'} />
                <Skeleton width={'100%'} borderRadius={'8px'} height={'80px'} />
            </VStack>
        );
    }

    return (
        <VStack gap={'16'} className={className}>
            {data?.map((item) => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </VStack>
    );
});
