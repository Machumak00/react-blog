import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/deprecated/Button';
import { Text, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text';


import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = memo(({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <Text
                text={t('Произошла непредвиденная ошибка')}
                align={TextAlign.CENTER}
                theme={TextTheme.PRIMARY}
            />
            <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
        </div>
    );
});
