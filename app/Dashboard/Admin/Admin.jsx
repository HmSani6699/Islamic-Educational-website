import React, { useState } from "react";
import logo from "../../../public/logo1.png";
import user from "../../../public/man.png";
import { IoNotificationsOutline } from "react-icons/io5";
import AdminLeftNavber from "../../Navber/AdminLeftNavber/AdminLeftNavber";
import { FiLogOut, FiMenu } from "react-icons/fi";
import { Outlet } from "react-router";
import close_icon from "../../../public/svg/close_icon.svg";
import seting_icon from "../../../public/svg/seting.svg";

const Admin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex max-w-[1400px] mx-auto bg-[#f4f7fe] min-h-screen relative">
      {/* ====> Sidebar (Fixed for Large Devices, Toggle for Mobile) <==== */}
      <div
        className={`lg:block ${
          isSidebarOpen ? "block" : "hidden"
        } fixed z-50 w-[300px] min-h-screen bg-white shadow-lg`}
      >
        <div className="flex items-end justify-end lg:hidden p-[20px]">
          <button onClick={() => setIsSidebarOpen(false)}>
            <img src={close_icon} alt="" />
          </button>
        </div>
        {/* ====> Logo div (Fixed) <==== */}
        <div className="flex items-center justify-center mt-[20px] pb-4 border-b">
          <img
            className="transition-all duration-300 w-[100px] h-[100px]"
            src={logo}
            alt="website logo"
          />
        </div>

        {/* ====> Scrollable Navbar <==== */}
        <nav className="mt-[10px] px-[10px] h-[calc(100vh-140px)] overflow-y-auto adminScrollbar">
          <AdminLeftNavber onClick={() => setIsSidebarOpen(false)} />
        </nav>
      </div>

      {/* ====> Right Content <==== */}
      <div
        className={`transition-all duration-300 w-full lg:pl-[300px] relative`}
      >
        {/* ====> Top Navbar (Fixed) <==== */}
        <div className="fixed left-0 lg:left-[300px] right-0 bg-white shadow-md z-40 lg:mx-[20px] lg:mt-[20px] lg:rounded-full rounded-b-[8px] ">
          <div className=" pl-[20px] pr-[10px] py-[8px] flex items-center justify-between rounded-[20px]">
            {/* Sidebar Toggle Button (For Mobile) */}
            <button
              className="lg:hidden block"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <FiMenu className="text-2xl" />
            </button>

            {/* Left Side */}
            <h2 className="text-[25px] font-bold lg:block hidden">
              Welcome to Admin
            </h2>

            {/* Right Side */}
            <div className="flex items-center gap-[20px]">
              <img src={seting_icon} alt="" />
              <IoNotificationsOutline className="text-[20px]" />
              <div className="w-[40px] h-[40px]">
                <img className="h-full w-full" src={user} alt="user image" />
              </div>
            </div>
          </div>
        </div>

        {/* ====> Main Content <==== */}
        <div className="p-5 overflow-y-auto mt-[20px] lg:mt-[50px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
