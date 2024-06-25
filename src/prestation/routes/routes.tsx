import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "../components/private-route/private-route";
import Login from "../pages/login/login";
import React from "react";
import Home from "../pages/home/home";
import Layout from "../components/layout/layout";
import Clients from "../pages/clients/clients";

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PrivateRoutes />}>
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
                    {/* <Route path="*" element={<NoPage />} /> */}
                </Route>
                <Route element={<Login />} path="/login" />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;