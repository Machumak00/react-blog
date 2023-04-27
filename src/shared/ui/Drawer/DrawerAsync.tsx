import { memo, type ReactNode, useCallback, useEffect } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { AnimationProvider, useAnimationModules } from '@/shared/lib/components/AnimationProvider'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'

import { Overlay } from '../Overlay/Overlay'
import { Portal } from '../Portal/Portal'
import { Skeleton } from '../Skeleton/Skeleton'
import { VStack } from '../Stack'

import cls from './Drawer.module.scss'

interface DrawerProps {
    className?: string
    children: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

const height = window.innerHeight - 100

const DrawerContent = memo((props: DrawerProps) => {
    const {
        Spring,
        Gesture
    } = useAnimationModules()
    const [{ y }, api] = Spring.useSpring(() => ({ y: height }))
    const { theme } = useTheme()
    const {
        className,
        children,
        isOpen,
        onClose
    } = props

    const openDrawer = useCallback(() => {
        api.start({
            y: 0,
            immediate: false
        })
    }, [api])

    useEffect(() => {
        if (isOpen) {
            openDrawer()
        }
    }, [isOpen, openDrawer])

    const close = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: {
                ...Spring.config.stiff,
                velocity
            },
            onResolve: onClose
        })
    }

    const bind = Gesture.useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            movement: [, my],
            cancel
        }) => {
            if (my < -70) {
                cancel()
            }

            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    close()
                } else {
                    openDrawer()
                }
            } else {
                api.start({
                    y: my,
                    immediate: true
                })
            }
        },
        {
            from: () => [0, y.get()],
            filterTaps: true,
            bounds: { top: 0 },
            rubberband: true
        }
    )

    if (!isOpen) {
        return null
    }

    const display = y.to((py) => (py < height ? 'block' : 'none'))

    return (
        <Portal>
            <div className={classNames(cls.Drawer, {}, [className, theme, 'app_drawer'])}>
                <Overlay onClick={() => close()}/>
                <Spring.a.div
                    className={cls.sheet}
                    style={{
                        display,
                        bottom: `calc(-100vh + ${height - 100}px)`,
                        y
                    }}
                    {...bind()}
                >
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    )
})

const DrawerAsync = memo((props: DrawerProps) => {
    const { isLoaded } = useAnimationModules()

    if (!isLoaded) {
        return (
            <VStack>
                <VStack
                    gap={'16'}
                    className={classNames('', {}, [])}
                >
                    <Skeleton width={'100%'} borderRadius={'8px'} height={'80px'}/>
                    <Skeleton width={'100%'} borderRadius={'8px'} height={'80px'}/>
                    <Skeleton width={'100%'} borderRadius={'8px'} height={'80px'}/>
                </VStack>
            </VStack>
        )
    }

    return <DrawerContent {...props}/>
})

export const Drawer = (props: DrawerProps) => {
    return (
        <AnimationProvider>
            <DrawerAsync {...props}/>
        </AnimationProvider>
    )
}