import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { RouteDecorator } from '@/shared/config/storybook/RouteDecorator/RouteDecorator'
import { SuspenseDecorator } from '@/shared/config/storybook/SuspenseDecorator/SuspenseDecorator'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
}

export const decorators = [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    RouteDecorator,
    SuspenseDecorator
]
