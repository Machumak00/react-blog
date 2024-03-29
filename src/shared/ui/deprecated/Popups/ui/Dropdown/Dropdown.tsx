import { Menu } from '@headlessui/react';
import { Fragment, type ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { type DropdownDirection } from '@/shared/types/ui';

import { HStack } from '../../../../redesigned/Stack';
import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

import cls from './Dropdown.module.scss';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropdownDirection;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Dropdown = (props: DropdownProps) => {
    const { className, items, trigger, direction = 'bottom right' } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap={'4'} align={'center'}>
            <Menu
                as={'div'}
                className={classNames(cls.Dropdown, {}, [
                    className,
                    popupCls.popup,
                ])}
            >
                <Menu.Button className={popupCls.trigger}>
                    {trigger}
                </Menu.Button>
                <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                    {items.map((item, index) => {
                        const content = ({ active }: { active: boolean }) => (
                            <button
                                onClick={item.onClick}
                                className={classNames(cls.item, {
                                    [popupCls.active]: active,
                                })}
                                disabled={item.disabled}
                            >
                                {item.content}
                            </button>
                        );

                        if (item.href) {
                            return (
                                <Menu.Item
                                    as={AppLink}
                                    to={item.href}
                                    disabled={item.disabled}
                                    key={index}
                                >
                                    {content}
                                </Menu.Item>
                            );
                        }

                        return (
                            <Menu.Item
                                as={Fragment}
                                disabled={item.disabled}
                                key={index}
                            >
                                {content}
                            </Menu.Item>
                        );
                    })}
                </Menu.Items>
            </Menu>
        </HStack>
    );
};
