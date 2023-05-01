import { screen } from '@testing-library/react'

import { UserRole } from '@/entities/User'
import { getRouteAbout, getRouteAdmin, getRouteProfile } from '@/shared/const/router'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'

import { AppRouter } from './AppRouter'

describe('app/router/AppRouter', function () {
    test('Страница должна отрендериться', async () => {
        componentRender(<AppRouter/>, {
            route: getRouteAbout()
        })

        const page = await screen.findByTestId('AboutPage')
        expect(page).toBeInTheDocument()
    })

    test('Страница не найдена', async () => {
        componentRender(<AppRouter/>, {
            route: '/dfsfse'
        })

        const page = await screen.findByTestId('NotFoundPage')
        expect(page).toBeInTheDocument()
    })

    test('Редирект неавторизованного пользователя на главную', async () => {
        componentRender(<AppRouter/>, {
            route: getRouteProfile('1')
        })

        const page = await screen.findByTestId('MainPage')
        expect(page).toBeInTheDocument()
    })

    test('Доступ к закрытой странице для авторизованного пользователя', async () => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
                matches: false,
                media: query,
                onchange: null,
                addListener: jest.fn(), // Deprecated
                removeListener: jest.fn(), // Deprecated
                addEventListener: jest.fn(),
                removeEventListener: jest.fn(),
                dispatchEvent: jest.fn()
            }))
        })

        componentRender(<AppRouter/>, {
            route: getRouteProfile('1'),
            initialState: {
                user: {
                    _mounted: true,
                    authData: {}
                }
            }
        })

        const page = await screen.findByTestId('ProfilePage')
        expect(page).toBeInTheDocument()
    })

    test('Доступ запрещён (отсутствует роль)', async () => {
        componentRender(<AppRouter/>, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _mounted: true,
                    authData: {}
                }
            }
        })

        const page = await screen.findByTestId('ForbiddenPage')
        expect(page).toBeInTheDocument()
    })

    test('Доступ разрешён (присутствует роль)', async () => {
        componentRender(<AppRouter/>, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _mounted: true,
                    authData: { roles: [UserRole.ADMIN] }
                }
            }
        })

        const page = await screen.findByTestId('AdminPanelPage')
        expect(page).toBeInTheDocument()
    })
})
