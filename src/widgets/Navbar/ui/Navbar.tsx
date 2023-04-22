import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useState } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { HStack } from 'shared/ui/Stack'
import { NotificationButton } from 'features/notificationButton'
import { AvatarDropdown } from 'features/avatarDropdown'
import { Drawer } from 'shared/ui/Drawer/Drawer'
import { NotificationList } from 'entities/Notification'

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)
    const authData = useSelector(getUserAuthData)

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <HStack justify={'between'}>
                    <HStack align={'center'}>
                        <Text
                            className={cls.appName}
                            title={t('Название приложения')}
                            theme={TextTheme.INVERTED}
                        />
                        <AppLink
                            to={RoutePath.article_create}
                            theme={AppLinkTheme.INVERTED}
                        >
                            {t('Создать статью')}
                        </AppLink>
                    </HStack>
                    <HStack gap={'16'} align={'center'} className={cls.actions}>
                        <NotificationButton/>
                        <AvatarDropdown user={authData}/>
                    </HStack>
                </HStack>
            </header>
        )
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <HStack justify={'between'}>
                <HStack align={'center'}>
                    <Text
                        className={cls.appName}
                        title={t('Название приложения')}
                        theme={TextTheme.INVERTED}
                    />
                    <AppLink
                        to={RoutePath.article_create}
                        theme={AppLinkTheme.INVERTED}
                    >
                        {t('Создать статью')}
                    </AppLink>
                </HStack>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onShowModal}
                >
                    {t('Войти')}
                </Button>
            </HStack>

            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            )}
        </header>
    )
})
