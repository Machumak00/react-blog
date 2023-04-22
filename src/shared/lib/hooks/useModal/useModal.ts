import { type KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react'

interface UseModalProps {
    onClose?: () => void
    isOpen?: boolean
    animationDelay: number
}

export const useModal = (props: UseModalProps) => {
    const {
        onClose,
        isOpen,
        animationDelay
    } = props
    const [isClosing, setIsClosing] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout>>()

    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, animationDelay)
        }
    }, [animationDelay, onClose])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            close()
        }
    }, [close])

    useEffect(() => {
        if (isOpen) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            window.addEventListener('keydown', onKeyDown)

            setIsMounted(true)
        }

        return () => {
            clearTimeout(timerRef.current)

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    return {
        isClosing,
        isMounted,
        close
    }
}
