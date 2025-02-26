import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import user from "../../../../public/sadiq.jpg";
import { GoDotFill } from "react-icons/go";

const StudentProfile = () => {
  return (
    <div>
      {/* =====> Tab Part Start <===== */}
      <div className="flex items-center justify-between pt-[10px] pb-[20px]">
        <div>
          <h2 className="text-[20px] font-semibold text-[#202C4B]">
            Student List
          </h2>
          <div className="flex items-center gap-[10px]">
            <p className="text-[#6A7287] text-[14px]">Dashboard</p>
            <p className="text-[#6a72876c]">/</p>
            <p className="text-[#6A7287] text-[14px]">Student</p>
            <p className="text-[#6a72876c]">/</p>
            <p className="text-[#6A7287] text-[14px]">All Student</p>
          </div>
        </div>

        <div className="flex items-center gap-[10px]">
          <button className="bg-[#E9EDF4] text-[14px] text-[#515B73] font-semibold flex items-center gap-[8px] rounded-[5px] py-[8px] px-[15px] shadow-sm">
            <MdLockOutline /> Login Details
          </button>
          <button
            //   onClick={() => navigae("/admin/admission_form")}
            className="bg-[#506EE4] text-[14px] text-white font-semibold flex items-center gap-[8px] rounded-[5px] py-[8px] px-[15px] shadow-sm"
          >
            <AiOutlineEdit /> Edit Student
          </button>
        </div>
      </div>
      {/* =====> Tab Part End <===== */}
      <div className="lg:flex">
        <div className="lg:w-[300px]">
          {/* basic info */}
          <div className="card_shadow w-full ">
            <div className="flex gap-[10px] items-center p-[20px]">
              <div className="h-[90px] w-[90px] rounded-[5px] border overflow-hidden">
                <img className="rounded-[5px]" src={user} alt="" />
              </div>
              <div>
                <button className="flex items-center bg-green-100 text-[14px] text-green-700 font-semibold py-[2px] px-[6px] rounded-[5px]">
                  <GoDotFill />
                  <p className="text-[10px]">Active</p>
                </button>
                <div>
                  <h2 className="text-[#202C4B] font-semibold mt-[6px]">
                    Sadiqur Rahman
                  </h2>
                  <p className="text-[#506EE4] text-[14px]">AD12345</p>
                </div>
              </div>
            </div>
            <div className="border-t p-[20px]">
              <h2 className="text-[#202C4B] text-[16px] font-[500]">
                Basic Information
              </h2>
              <div className="grid grid-cols-2 gap-[10px] mt-[15px]">
                <p className="text-[#202C4B] text-[14px] font-[400]">Roll No</p>
                <p className="text-[14px] text-gray-400">124</p>
                <p className="text-[#202C4B] text-[14px] font-[400]">Gender </p>
                <p className="text-[14px] text-gray-400">Male</p>
                <p className="text-[#202C4B] text-[14px] font-[400]">
                  Date Of Birth
                </p>
                <p className="text-[14px] text-gray-400">10/11/2002</p>
                <p className="text-[#202C4B] text-[14px] font-[400]">
                  Blood Group
                </p>
                <p className="text-[14px] text-gray-400">AB-</p>
                <p className="text-[#202C4B] text-[14px] font-[400]">
                  Category
                </p>
                <p className="text-[14px] text-gray-400">OB</p>
              </div>
              <button
                //   onClick={() => navigae("/admin/admission_form")}
                className="bg-[#506EE4] w-full text-center text-[14px] mt-[20px] text-white font-semibold  rounded-[5px] py-[8px] px-[15px] shadow-sm"
              >
                Add Fees
              </button>
            </div>
          </div>
          {/* primary info */}
          <div className="card_shadow w-full">
            <h2 className="text-[#202C4B] text-[16px] font-[500]">
              Basic Information
            </h2>
          </div>
        </div>
        <div>right</div>
      </div>
    </div>
  );
};

export default StudentProfile;
