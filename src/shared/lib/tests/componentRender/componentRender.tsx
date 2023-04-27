import { type ReducersMapObject } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'

import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import i18nForTests from '@/shared/config/i18n/i18nForTests'
import { getRouteMain } from '@/shared/const/router'

export interface ComponentRenderOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export function componentRender (component: ReactNode, options: ComponentRenderOptions = {}) {
    const {
        route = getRouteMain(),
        initialState,
        asyncReducers
    } = options

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    )
}
