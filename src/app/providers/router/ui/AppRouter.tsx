import React, { memo, Suspense, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader/PageLoader'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'

export const AppRouter = memo(() => {
    const isAuth = useSelector(getUserAuthData)

    const routes = useMemo(() => {
        return Object.values(routeConfig).filter(route => {
            return isAuth || !route.authOnly
        })
    }, [isAuth])

    return (
        <Suspense fallback={<PageLoader/>}>
            <div className="page-wrapper">
                <Routes>
                    {routes.map(({ element, path }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            </div>
        </Suspense>
    )
})
