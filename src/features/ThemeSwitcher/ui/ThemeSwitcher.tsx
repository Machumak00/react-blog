import { classNames } from '@/shared/lib/classNames/classNames'
import React, { memo } from 'react'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import ThemeSwitcherIcon from '@/shared/assets/icons/theme-switcher-45-45.svg'
import cls from './ThemeSwitcher.module.scss'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme()

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            <ThemeSwitcherIcon className={cls.icon}/>
        </Button>
    )
})
