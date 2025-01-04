import React from "react";
import logo from "../../../public/logo1.png";
import user from "../../../public/man.png";
import { IoNotificationsOutline } from "react-icons/io5";
import AdminLeftNavber from "../../Navber/AdminLeftNavber/AdminLeftNavber";
import { FiLogOut } from "react-icons/fi";
import { Outlet } from "react-router";

const Admin = () => {
  return (
    <div className="flex max-w-[1400px] mx-auto bg-gray-100">
      {/* ====> Lift sidber  <====5*/}
      <div className="w-[250px] bg-white text-white min-h-screen rounded-r-[20px] ">
        {/* ====> Logo div <==== */}
        <div className="flex items-center justify-center mt-[20px]">
          <img className="w-[100px] h-[100px]" src={logo} alt="website logo" />
        </div>
        {/* =====> Navber <===== */}
        <nav className="mt-[20px] px-[10px] ">
          <AdminLeftNavber />
          {/* ===> Log out <==== */}
        </nav>
        {/* <div className="absolute bottom-0 bg-red-400  flex items-end  rounded-[20px] border border-red-600">
          <h2>Logout</h2>
          <FiLogOut />
        </div> */}
      </div>
      {/* ====> Right Contect  <==== */}
      <div className="w-full m-[20px]">
        {/*  top part */}
        <div className=" bg-white  mt-[10px] px-[30px] py-[8px] flex items-center justify-between rounded-[20px]">
          {/* leeft site  */}
          <div>
            <h2 className="text-[25px] font-bold">Welcome to Admin</h2>
          </div>
          {/* Right site  */}
          <div className="flex items-center justify-center gap-[20px]">
            <IoNotificationsOutline className="text-[20px]" />
            <div className="w-[40px] h-[40px]">
              <img className="h-full w-full" src={user} alt="user image" />
            </div>
          </div>
        </div>
        {/* ======> MAin content  <===== */}
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
