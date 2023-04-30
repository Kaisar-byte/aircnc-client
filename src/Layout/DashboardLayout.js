import React from "react";
import Sidebar from "../Dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="md:flex relative min-h-screen">
      <Sidebar></Sidebar>
      <div className="flex-1 md:pl-64">
        <div className="p-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
