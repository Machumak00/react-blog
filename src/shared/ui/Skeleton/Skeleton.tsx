import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Skeleton.module.scss'
import { useTranslation } from 'react-i18next'
import { type CSSProperties, memo } from 'react'

interface SkeletonProps {
    className?: string
    height?: string | number
    width?: string | number
    borderRadius?: string
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        className,
        height,
        width,
        borderRadius
    } = props

    const styles: CSSProperties = {
        width,
        height,
        borderRadius
    }

    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        />
    )
})
