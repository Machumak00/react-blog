import { Menu } from '@headlessui/react'
import cls from './Dropdown.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Fragment, type ReactNode } from 'react'
import { type DropdownDirection } from 'shared/types/ui'
import { HStack } from '../Stack'
import { AppLink } from '../AppLink/AppLink'

export interface DropdownItem {
    disabled?: boolean
    content?: ReactNode
    onClick?: () => void
    href?: string
}

interface DropdownProps {
    className?: string
    items: DropdownItem[]
    trigger: ReactNode
    direction?: DropdownDirection
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight,
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight
}

export const Dropdown = (props: DropdownProps) => {
    const {
        className,
        items,
        trigger,
        direction = 'bottom right'
    } = props

    const menuClasses = [
        mapDirectionClass[direction]
    ]

    return (
        <HStack gap={'4'} align={'center'}>
            <Menu as={'div'} className={classNames(cls.Dropdown, {}, [className])}>
                <Menu.Button className={cls.btn}>
                    {trigger}
                </Menu.Button>
                <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                    {items.map((item, index) => {
                        const content = ({ active }: { active: boolean }) => (
                            <button
                                onClick={item.onClick}
                                className={classNames(cls.item, { [cls.active]: active })}
                                disabled={item.disabled}
                            >
                                {item.content}
                            </button>
                        )

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
                            )
                        }

                        return (
                            <Menu.Item
                                as={Fragment}
                                disabled={item.disabled}
                                key={index}
                            >
                                {content}
                            </Menu.Item>
                        )
                    })}
                </Menu.Items>
            </Menu>
        </HStack>
    )
}
