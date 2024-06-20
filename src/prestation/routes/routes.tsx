import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "../components/private-route/private-route";
import Login from "../pages/login/login";
import React from "react";
import Home from "../pages/home/home";
import Layout from "../components/layout/layout";

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PrivateRoutes />}>
                    <Route index path="home"
                        element={
                            <Layout>
                                <Home />
                            </Layout>
                        } />
                    <Route path="blogs" element={<div />} />
                    {/* <Route path="*" element={<NoPage />} /> */}
                </Route>
                <Route element={<Login />} path="/login" />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;