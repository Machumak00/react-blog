import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import {
    type ChangeEvent,
    type HTMLInputTypeAttribute,
    type InputHTMLAttributes,
    memo,
    type MutableRefObject,
    useEffect,
    useRef,
    useState
} from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string | number
    onChange?: (value: string) => void
    autofocus?: boolean
    readonly?: boolean
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        ...otherProps
    } = props

    const ref = useRef() as MutableRefObject<HTMLInputElement>

    const [isFocused, setIsFocused] = useState(false)
    const [carriagePosition, setCarriagePosition] = useState(0)
    const isCarriageVisible = isFocused && !readonly

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true)
            ref.current.focus()
        }
    }, [autofocus])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
        setCarriagePosition(e.target.value.length)
    }

    const onBlur = () => {
        setIsFocused(false)
    }

    const onFocus = () => {
        setIsFocused(true)
    }

    const onSelect = (e: any) => {
        setCarriagePosition(e?.target?.selectionStart || 0)
    }

    const mods: Mods = {
        [cls.readonly]: readonly
    }

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.carriageWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.Input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    readOnly={readonly}
                    {...otherProps}
                />
                {isCarriageVisible && (
                    <span
                        className={cls.carriage}
                        style={{ left: `${carriagePosition * 9}px` }}
                    />
                )}
            </div>
        </div>
    )
})
