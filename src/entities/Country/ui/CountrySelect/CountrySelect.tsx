import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ToggleFeatures } from '@/shared/lib/features';
import { getOptionsFromObject } from '@/shared/lib/getOptionsFromObject/getOptionsFromObject';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';

import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

export const CountrySelect = memo(
    ({ className, value, onChange, readonly }: CountrySelectProps) => {
        const { t } = useTranslation();

        const options = useMemo(() => {
            return getOptionsFromObject(Country);
        }, []);

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Country);
            },
            [onChange],
        );

        const props = {
            items: options,
            value,
            label: t('Страна'),
            defaultValue: t('Страна'),
            onChange: onChangeHandler,
            className,
            readonly,
            direction: 'top right' as const,
        };

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<ListBox {...props} />}
                off={<ListBoxDeprecated {...props} />}
            />
        );
    },
);
