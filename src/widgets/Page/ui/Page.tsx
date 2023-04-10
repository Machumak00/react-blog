import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Page.module.scss'
import { type MutableRefObject, type ReactNode, type UIEvent, useRef } from 'react'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getScrollSaveByPath, scrollSaveActions } from 'features/ScrollSave'
import { useLocation } from 'react-router-dom'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useSelector } from 'react-redux'
import { type StateSchema } from 'app/providers/StoreProvider'
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle'

interface PageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const PAGE_ID = 'PAGE_ID'

export const Page = (props: PageProps) => {
    const { className, children, onScrollEnd } = props
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
    const dispatch = useAppDispatch()
    const { pathname } = useLocation()
    const scrollPosition = useSelector(
        (state: StateSchema) => getScrollSaveByPath(state, pathname)
    )

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    })

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition
    })

    const onScroll = useThrottle((e: UIEvent) => {
        dispatch(scrollSaveActions.setScrollPosition({
            path: pathname,
            position: e.currentTarget.scrollTop
        }))
    }, 500)

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScroll}
            id={PAGE_ID}
        >
            {children}
            {onScrollEnd ? <div className={cls.trigger} ref={triggerRef}/> : null}
        </section>
    )
}