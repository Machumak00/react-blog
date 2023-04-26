import React, { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AppRoutesProps } from '@/shared/types/router'
import { PageLoader } from '@/widgets/PageLoader'

import { routeConfig } from '../config/routeConfig'

import { RequireAuth } from './RequireAuth'

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth roles={route.roles}><>{route.element}</></RequireAuth> : route.element}
            />
        )
    }, [])

    return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {Object.values(routeConfig).map((route) => (
                    renderWithWrapper(route)
                ))}
            </Routes>
        </Suspense>
    )
})
