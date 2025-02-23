import React, { useState } from "react";
import logo from "../../../public/logo1.png";
import user from "../../../public/man.png";
import { IoNotificationsOutline } from "react-icons/io5";
import AdminLeftNavber from "../../Navber/AdminLeftNavber/AdminLeftNavber";
import { FiLogOut, FiMenu } from "react-icons/fi";
import { Outlet } from "react-router";
import close_icon from "../../../public/svg/close_icon.svg";
import seting_icon from "../../../public/svg/seting.svg";
import edu_logo from "../../../public/svg/edulogo.svg";
import logo_out from "../../../public/svg/logout.svg";

const Admin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex max-w-[1400px] mx-auto bg-[#f4f7fe] min-h-screen relative">
      {/* ====> Sidebar (Fixed for Large Devices, Toggle for Mobile) <==== */}
      <div
        className={`lg:block ${
          isSidebarOpen ? "block" : "hidden"
        } fixed z-50 w-[270px] min-h-screen bg-white shadow-lg`}
      >
        <div className="flex items-end justify-end lg:hidden p-[20px]">
          <button onClick={() => setIsSidebarOpen(false)}>
            <img src={close_icon} alt="" />
          </button>
        </div>
        {/* ====> Logo div (Fixed) <==== */}
        <div className="flex items-center pl-[30px] gap-[5px] mt-[20px] pb-4 ">
          <img
            className="transition-all duration-300 w-[40px] h-[40px]"
            src={edu_logo}
            alt="website logo"
          />
          <h2 className=" text-[24px]">
            <span className="font-bold">Edu</span>Sadiq
          </h2>
        </div>
        {/* ====> Scrollable Navbar <==== */}
        <nav className="mt-[10px] px-[10px] h-[calc(100vh-140px)] overflow-y-auto adminScrollbar">
          <AdminLeftNavber onClick={() => setIsSidebarOpen(false)} />
        </nav>
        <div className="flex items-center justify-center gap-[20px] w-full pt-[15px] border-t  h-full">
          <button className="text-[16px] text-[#515B73] font-semibold">
            Log Out
          </button>
          <img src={logo_out} alt="" />
        </div>
      </div>

      {/* ====> Right Content <==== */}
      <div className="transition-all duration-300 w-full lg:pl-[270px] relative">
        {/* ====> Top Navbar (Fixed) <==== */}
        <div className="fixed top-0 left-0  right-0 z-40 w-full bg-white shadow-md">
          <div className="flex items-center justify-between px-6 py-3 w-full max-w-[1400px] mx-auto">
            {/* Sidebar Toggle Button (Mobile Only) */}
            <button
              className="lg:hidden block"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <FiMenu className="text-2xl" />
            </button>

            {/* Title */}
            <h2 className="text-lg font-semibold lg:pl-[270px]">
              Welcome to Admin
            </h2>

            {/* Right Side */}
            <div className="flex items-center gap-5 justify-end flex-shrink-0">
              <img src={seting_icon} alt="Settings Icon" />
              <IoNotificationsOutline className="text-2xl cursor-pointer" />
              <h2 className="font-medium whitespace-nowrap">
                Md: Sadiqur Rahman
              </h2>
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={user}
                  alt="User Image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ====> Main Content <==== */}
        <div className="container mx-auto lg:p-6 p-4 overflow-y-auto mt-[70px] lg:mt-[80px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
