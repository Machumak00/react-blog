import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useCallback, useState } from 'react'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { Icon } from '@/shared/ui/Icon/Icon'
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg'
import { NotificationList } from '@/entities/Notification'
import { Popover } from '@/shared/ui/Popups'
import cls from './NotificationButton.module.scss'
import { Drawer } from '@/shared/ui/Drawer/DrawerAsync'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const {
        className
    } = props
    const [isOpen, setIsOpen] = useState(false)
    const isMobile = useDevice()

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true)
    }, [])

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false)
    }, [])

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} inverted/>
        </Button>
    )

    return (
        <div>
            {isMobile
                ? (
                    <>
                        {trigger}
                        <Drawer onClose={onCloseDrawer} isOpen={isOpen}>
                            <NotificationList/>
                        </Drawer>
                    </>
                )
                : (
                    <Popover
                        className={classNames(cls.NotificationButton, {}, [className])}
                        direction={'bottom left'}
                        trigger={trigger}
                    >
                        <NotificationList className={cls.notifications}/>
                    </Popover>
                )
            }
        </div>
    )
})
