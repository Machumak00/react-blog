import { classNames } from '@/shared/lib/classNames/classNames'
import { Modal } from '@/shared/ui/Modal/Modal'
import { LoginFormAsync as LoginForm } from '../LoginForm/LoginForm.async'
import { memo, Suspense } from 'react'
import { Loader } from '@/shared/ui/Loader/Loader'

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal = memo(({
    className,
    isOpen,
    onClose
}: LoginModalProps) => {
    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader/>}>
                <LoginForm onSuccess={onClose}/>
            </Suspense>
        </Modal>
    )
})
