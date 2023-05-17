import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';


import { ArticleSortField } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { type SortOrder } from '@/shared/types/sort';
import { Select, type SelectOption } from '@/shared/ui/deprecated/Select';

import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeSort: (newSort: ArticleSortField) => void;
    onChangeOrder: (newOrder: SortOrder) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { className, sort, order, onChangeSort, onChangeOrder } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(
        () => [
            {
                value: 'asc',
                content: t('возрастанию'),
            },
            {
                value: 'desc',
                content: t('убыванию'),
            },
        ],
        [t],
    );

    const sortFieldOptions = useMemo<Array<SelectOption<ArticleSortField>>>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t('дате создания'),
            },
            {
                value: ArticleSortField.TITLE,
                content: t('названию'),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('просмотрам'),
            },
        ],
        [t],
    );

    return (
        <div
            data-testid={'ArticleSortSelector'}
            className={classNames(cls.ArticleSortSelector, {}, [className])}
        >
            <Select
                data-testid={'ArticleSortSelector.SortFieldOptions'}
                options={sortFieldOptions}
                label={t('Сортировать по')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                data-testid={'ArticleSortSelector.OrderOptions'}
                options={orderOptions}
                label={t('по')}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
    );
});
