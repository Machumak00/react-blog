import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { Dropdown } from '@/shared/ui/Popups'
import { useSelector } from 'react-redux'
import { isUserAdmin, isUserManager, type User, userActions } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { RoutePath } from '@/shared/const/router'

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
                        href: RoutePath.admin_panel
                    }]
                    : []
                ),
                {
                    content: t('Профиль'),
                    href: RoutePath.profile + user.id
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
