import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader/PageLoader'

export const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader/>}>
            <div className="page-wrapper">
                <Routes>
                    {Object.values(routeConfig).map(({ element, path }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            </div>
        </Suspense>
    )
}
