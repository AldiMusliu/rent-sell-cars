import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";

const DashboardLayout = () => {
  const [navbarShow, setNavbarShow] = useState(true);
  const handleShowNavbar = () => {
    setNavbarShow(true);
  };

  return (
    <div className="dashboardLayout">
      <div
        className="dashboardLayout-navbar"
        style={navbarShow ? { display: "block" } : { display: `none` }}
      >
        <DashboardNavbar
          navbarShow={navbarShow}
          setNavbarShow={setNavbarShow}
        />
      </div>
      <div className="dashboardLayout-navbarShowButton">
        {!navbarShow && <button onClick={handleShowNavbar}>Show Navbar</button>}
      </div>
      <div className="dashboardLayout-outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
