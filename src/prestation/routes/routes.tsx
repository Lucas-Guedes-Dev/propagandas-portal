import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "../components/private-route/private-route";
import Login from "../pages/login/login";
import React from "react";

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PrivateRoutes />}>
                    <Route index element={<div />} />
                    <Route path="blogs" element={<div />} />
                    {/* <Route path="*" element={<NoPage />} /> */}
                </Route>
                <Route element={<Login />} path="/login" />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;