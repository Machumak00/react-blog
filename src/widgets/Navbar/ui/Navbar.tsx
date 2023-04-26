import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getUserAuthData } from '@/entities/User'
import { LoginModal } from '@/features/AuthByUsername'
import { AvatarDropdown } from '@/features/avatarDropdown'
import { NotificationButton } from '@/features/notificationButton'
import { RoutePath } from '@/shared/const/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { HStack } from '@/shared/ui/Stack'
import { Text, TextTheme } from '@/shared/ui/Text'

import cls from './Navbar.module.scss'

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
