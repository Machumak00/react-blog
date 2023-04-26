import { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import { getOptionsFromObject } from '@/shared/lib/getOptionsFromObject/getOptionsFromObject'
import { ListBox } from '@/shared/ui/Popups'

import { Currency } from '../../model/types/currency'

interface CurrencySelectProps {
    className?: string
    value?: Currency
    onChange?: (value: Currency) => void
    readonly?: boolean
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly
    } = props

    const { t } = useTranslation()

    const options = useMemo(() => {
        return getOptionsFromObject(Currency)
    }, [])

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency)
    }, [onChange])

    return (
        <ListBox
            items={options}
            value={value}
            label={t('Валюта')}
            defaultValue={t('Валюта')}
            onChange={onChangeHandler}
            className={classNames('', {}, [className])}
            readonly={readonly}
            direction={'top right'}
        />
    )
})
