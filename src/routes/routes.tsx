import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "../components/private-route/private-route";
import Login from "../pages/login/login";

export default function Router() {
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