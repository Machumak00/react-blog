import { RouteDecorator } from '@/shared/config/storybook/RouteDecorator/RouteDecorator'
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator'
import { SuspenseDecorator } from '@/shared/config/storybook/SuspenseDecorator/SuspenseDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    layout: 'fullscreen',
    themes: {
        default: 'light',
        list: [
            {
                name: 'light',
                class: Theme.LIGHT,
                color: '#ffffff'
            },
            {
                name: 'dark',
                class: Theme.DARK,
                color: '#000000'
            },
            {
                name: 'pink',
                class: Theme.PINK,
                color: '#fc38c8'
            }
        ]
    }
}

export const decorators = [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    RouteDecorator,
    SuspenseDecorator
]
