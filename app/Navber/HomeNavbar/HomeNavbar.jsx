import React from "react";
import user from "../../../public/man.png";
import { MdLogin } from "react-icons/md";

const HomeNavbar = () => {
  return (
    <div className=" relative z-10">
      <div className="max-w-[1100px] mx-auto bg-white flex items-center justify-between p-[10px] rounded-[10px] ">
        {/* ======> Logo section <===== */}
        <div className="w-[50px] h-[50px] rounded-full bg-white">
          <img src={user} alt="" />
        </div>
        {/* ======> Logo section <===== */}
        <div className="flex gap-[40px]">
          <p className="text-[18px] font-semibold">Home</p>
          <p className="text-[18px] font-semibold">About</p>
          <p className="text-[18px] font-semibold">Blog</p>
          <p className="text-[18px] font-semibold">Profile</p>
        </div>
        {/* ======> login section <===== */}
        <div>
          <button className="flex items-center gap-[8px] bg-[#2e3192]  font-bold text-white px-[20px] py-[8px] rounded-[8px]">
            Login
            <MdLogin />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
