import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoutes from "../components/private-route/private-route";
import Login from "../pages/login/login";
import React from "react";
import Home from "../pages/home/home";
import Layout from "../components/layout/layout";
import Clients from "../pages/clients/clients";

const Router: React.FC = () => {
    const token = localStorage.getItem('token');

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path="/login" />
                <Route path="/" element={token ? <Navigate to="/home" /> : <Navigate to="/login" />} />

                <Route element={<PrivateRoutes />}>
                    <Route index path="/home"
                        element={
                            <Layout>
                                <Home />
                            </Layout>
                        } />
                    <Route path="/clientes" element={
                        <Layout>
                            <Clients />
                        </Layout>
                    } />
                    <Route path="*" element={<div>not found</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;