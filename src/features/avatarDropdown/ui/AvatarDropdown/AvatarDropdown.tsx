import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Dropdown } from 'shared/ui/Popups'
import { useDispatch, useSelector } from 'react-redux'
import { isUserAdmin, isUserManager, type User, userActions } from 'entities/User'
import { classNames } from 'shared/lib/classNames/classNames'

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
    const dispatch = useDispatch()
    const isAdmin = useSelector(isUserAdmin)
    const isManager = useSelector(isUserManager)

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    const isAdminPanelAvailable = isAdmin || isManager

    return (
        <Dropdown
            className={classNames('', {}, [className])}
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
