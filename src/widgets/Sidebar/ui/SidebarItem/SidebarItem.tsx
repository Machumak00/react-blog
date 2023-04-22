import cls from './SidebarItem.module.scss'
import { useTranslation } from 'react-i18next'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import { type SidebarItemType } from '../../model/types/sidebar'
import { HStack } from 'shared/ui/Stack'
import { getUserAuthData } from 'entities/User'

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation()
    const isAuth = useSelector(getUserAuthData)

    if (item.authOnly && !isAuth) {
        return null
    }

    return (
        <AppLink
            theme={AppLinkTheme.INVERTED}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <HStack gap={'8'} max>
                <item.Icon className={cls.icon} />
                <span className={cls.link}>
                    {t(item.text)}
                </span>
            </HStack>
        </AppLink>
    )
})
