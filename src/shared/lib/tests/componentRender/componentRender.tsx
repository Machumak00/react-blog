import { type ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
// eslint-disable-next-line machumak-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import i18nForTests from '@/shared/config/i18n/i18nForTests';
import { getRouteMain } from '@/shared/const/router';
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line machumak-plugin/layer-imports
import '@/app/styles/index.scss';

export interface ComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
    theme?: Theme;
}

interface TestProviderProps {
    children: ReactNode;
    options?: ComponentRenderOptions;
}

export function TestProvider(props: TestProviderProps) {
    const { children, options = {} } = props;

    const {
        route = getRouteMain(),
        initialState,
        asyncReducers,
        theme = Theme.LIGHT,
    } = options;

    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <MemoryRouter initialEntries={[route]}>
                    <StoreProvider
                        asyncReducers={asyncReducers}
                        initialState={initialState}
                    >
                        <I18nextProvider i18n={i18nForTests}>
                            {children}
                        </I18nextProvider>
                    </StoreProvider>
                </MemoryRouter>
            </div>
        </ThemeProvider>
    );
}

export function componentRender(
    component: ReactNode,
    options: ComponentRenderOptions = {},
) {
    return render(<TestProvider options={options}>{component}</TestProvider>);
}
