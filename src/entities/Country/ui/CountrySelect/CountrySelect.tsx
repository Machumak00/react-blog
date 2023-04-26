import { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import { getOptionsFromObject } from '@/shared/lib/getOptionsFromObject/getOptionsFromObject'
import { ListBox } from '@/shared/ui/Popups'

import { Country } from '../../model/types/country'

interface CountrySelectProps {
    className?: string
    value?: Country
    onChange?: (value: Country) => void
    readonly?: boolean
}

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly
    } = props

    const { t } = useTranslation()

    const options = useMemo(() => {
        return getOptionsFromObject(Country)
    }, [])

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country)
    }, [onChange])

    return (
        <ListBox
            items={options}
            value={value}
            label={t('Страна')}
            defaultValue={t('Страна')}
            onChange={onChangeHandler}
            className={classNames('', {}, [className])}
            readonly={readonly}
            direction={'top right'}
        />
    )
})
