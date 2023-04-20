import { useSelector } from 'react-redux'
import { getUserAuthData, getUserRoles } from 'entities/User'
import { Navigate, useLocation } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useMemo } from 'react'
import { type UserRole } from 'entities/User'

interface RequireAuthProps {
    children: JSX.Element
    roles?: UserRole[]
}

export function RequireAuth ({ children, roles }: RequireAuthProps) {
    const isAuth = useSelector(getUserAuthData)
    const location = useLocation()
    const userRoles = useSelector(getUserRoles)

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true
        }

        return roles.some(requiredRole => userRoles?.includes(requiredRole))
    }, [roles, userRoles])

    if (!isAuth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace/>
    }

    if (!hasRequiredRoles) {
        return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace/>
    }

    return children
}
