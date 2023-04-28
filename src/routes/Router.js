

import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardCar from "../pages/DashboardCar/DashboardCar";
import Bookings from "../pages/DashboardCar/Bookings";
import SellCar from "../pages/DashboardCar/SellCar";
import Settings from "../pages/DashboardCar/Settings";

const Router = () => {
    return <BrowserRouter>
    <Routes>
    <Route
        path="/"
        element={<Navigate to="/dashboardCar" element={<DashboardCar />} />}
      />
        <Route path='/dashboardCar' element={<DashboardCar />}/>
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/sell-car" element={<SellCar />} />
        <Route path="/settings" element={<Settings />} />
    </Routes>
    </BrowserRouter>
    
}

export default Router;