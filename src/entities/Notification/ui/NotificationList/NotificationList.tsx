import { memo } from 'react';

import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
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
