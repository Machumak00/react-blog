import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { isUserAdmin, isUserManager, type User, userActions } from '@/entities/User'
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Avatar } from '@/shared/ui/Avatar'
import { Dropdown } from '@/shared/ui/Popups'

interface AvatarDropdownProps {
    className?: string
    user: User
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const {
        className,
        user
    } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const isAdmin = useSelector(isUserAdmin)
    const isManager = useSelector(isUserManager)

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    const isAdminPanelAvailable = isAdmin || isManager

    return (
        <Dropdown
            className={className}
            items={[
                ...(isAdminPanelAvailable
                    ? [{
                        content: t('Админка'),
                        href: getRouteAdmin()
                    }]
                    : []
                ),
                {
                    content: t('Профиль'),
                    href: getRouteProfile(user.id)
                },
                {
                    content: t('Выйти'),
                    onClick: onLogout
                }
            ]}
            trigger={<Avatar size={30} src={user.avatar}/>}
            direction={'bottom left'}
        />
    )
})
