import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoutes from "../components/private-route/private-route";
import Login from "../pages/login/login";
import React from "react";
import Home from "../pages/home/home";
import Layout from "../components/layout/layout";
import ListClients from "../pages/list-clients/list-client";
import ListAds from "../pages/list-ads/list-ads";
import ListUsers from "../pages/list-users/list-users";
import FormClient from "../pages/form-client/form-client";

const Router: React.FC = () => {
    const token = localStorage.getItem('token');

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path="/login" />

                <Route element={<PrivateRoutes />}>
                    <Route path="/" element={token ? <Navigate to="/home" /> : <Navigate to="/login" />} />

                    <Route index path="/home"
                        element={
                            <Layout>
                                <Home />
                            </Layout>
                        } />
                    <Route path="/clientes" element={
                        <Layout>
                            <ListClients />
                        </Layout>
                    } />

                    <Route path="/editar/cliente/:client_id" element={
                        <Layout>
                            <FormClient />
                        </Layout>
                    } />

                    <Route path="/propagandas" element={
                        <Layout>
                            <ListAds />
                        </Layout>
                    } />

                    <Route path="/usuarios" element={
                        <Layout>
                            <ListUsers />
                        </Layout>
                    } />
                    <Route path="*" element={<div>not found</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;