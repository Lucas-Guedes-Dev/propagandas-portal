import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes: React.FC = () => {
    const token = localStorage.getItem('token');

    return (
        token ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes;