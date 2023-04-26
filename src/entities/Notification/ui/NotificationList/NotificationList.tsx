import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Skeleton } from '@/shared/ui/Skeleton'
import { VStack } from '@/shared/ui/Stack'

import { useGetNotifications } from '../../api/notificationApi'
import { NotificationItem } from '../NotificationItem/NotificationItem'

import cls from './NotificationList.module.scss'

interface NotificationListProps {
    className?: string
}

export const NotificationList = memo((props: NotificationListProps) => {
    const {
        className
    } = props
    const { data, isLoading } = useGetNotifications(undefined, {
        pollingInterval: 5000
    })

    if (isLoading) {
        return (
            <VStack
                gap={'16'}
                className={classNames(cls.NotificationList, {}, [className])}
            >
                <Skeleton width={'100%'} borderRadius={'8px'} height={'80px'}/>
                <Skeleton width={'100%'} borderRadius={'8px'} height={'80px'}/>
                <Skeleton width={'100%'} borderRadius={'8px'} height={'80px'}/>
            </VStack>
        )
    }

    return (
        <VStack
            gap={'16'}
            className={classNames(cls.NotificationList, {}, [className])}
        >
            {data?.map(item => (
                <NotificationItem key={item.id} item={item}/>
            ))}
        </VStack>
    )
})
