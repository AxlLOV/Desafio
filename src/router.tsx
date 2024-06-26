import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./views/home";
import { LoginPage } from "./views/login";
import { Loginv2Page } from "./views/loginv2";
import { LayoutComponent } from "./components/Layout";

export const AppRouter: React.FC<{}> = () => {
    return (
        <Routes>
            <Route path="/" element={<LayoutComponent/>}>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/login" element={<LoginPage/>}></Route>
                <Route path="/loginv2" element={<Loginv2Page/>}></Route>
            </Route>
        </Routes>
    )
};