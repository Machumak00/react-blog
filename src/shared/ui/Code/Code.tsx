import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Code.module.scss'
import { type ReactNode, useCallback } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import CopyIcon from 'shared/assets/icons/copy-20-20.svg'

interface CodeProps {
    className?: string
    text: string
}

export const Code = (props: CodeProps) => {
    const {
        className,
        text
    } = props

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text)
    }, [text])

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
                <CopyIcon className={cls.copyBtn}/>
            </Button>
            <code>
                {text}
            </code>
        </pre>
    )
}
