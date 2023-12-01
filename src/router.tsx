import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { TrackMoney } from "./pages/TrackMoney";
import { ShoppingNu } from "./pages/ShoppingNu";

export const Router = () => {
    const location = useLocation();

    return (
        <Routes location={location}>
            <Route index element={<Home />} />
            <Route path="/AcompanheSeuDinheiro" element={<TrackMoney />} />
            <Route path="/ShoppingNu" element={<ShoppingNu />} />
        </Routes>
    );
};
