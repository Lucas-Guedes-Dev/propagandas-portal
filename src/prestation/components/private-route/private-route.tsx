import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useToken } from '../../../store/auth-token'

const PrivateRoutes: React.FC = () => {
    const { token } = useToken();

    return (
        token ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes