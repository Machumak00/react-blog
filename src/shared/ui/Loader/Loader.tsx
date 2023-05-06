import { memo } from 'react';
import './Loader.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface LoaderProps {
    className?: string;
}

export const Loader = memo(({ className }: LoaderProps) => {
    return (
        <div className={classNames('lds-ellipsis', {}, [className])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
});
