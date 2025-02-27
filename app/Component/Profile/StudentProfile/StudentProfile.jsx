import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import {
  MdLockOutline,
  MdOutlineEmail,
  MdOutlineTableChart,
} from "react-icons/md";
import user from "../../../../public/sadiq.jpg";
import { GoDotFill } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { PiStudent } from "react-icons/pi";
import { LuCalendarDays } from "react-icons/lu";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { BsBookmarkStar } from "react-icons/bs";

const StudentProfile = () => {
  const [tabBtn, setTabBtn] = useState("details");
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
      <div className="lg:flex gap-[20px]">
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
                  <h2 className="text-[#202C4B] font-semibold whitespace-nowrap mt-[6px]">
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
          <div className="card_shadow w-full p-[20px] mt-[20px]">
            <h2 className="text-[#202C4B] text-[16px] font-[500]">
              Basic Information
            </h2>
            <div className="flex items-center gap-[10px] mt-[15px]">
              <button className="bg-gray-100 p-[8px] rounded-[5px]">
                <IoCallOutline className="text-[14px]" />
              </button>
              <div>
                <h2 className="text-[#202C4B] text-[14px] font-[500]">
                  Phone Number
                </h2>
                <p className="text-[13px] text-gray-500">01996359111</p>
              </div>
            </div>
            <div className="flex items-center gap-[10px] mt-[15px]">
              <button className="bg-gray-100 p-[8px] rounded-[5px]">
                <MdOutlineEmail className="text-[14px]" />
              </button>
              <div>
                <h2 className="text-[#202C4B] text-[14px] font-[500]">
                  Email Address
                </h2>
                <p className="text-[13px] text-gray-500">sadiq@gmail.com</p>
              </div>
            </div>
          </div>
          {/* sibiling info */}
          <div className="card_shadow w-full p-[20px] mt-[20px]">
            <h2 className="text-[#202C4B] text-[16px] font-[500]">
              Sibiling Information
            </h2>
            <div className="flex items-center gap-[10px] mt-[15px] rounded-[5px] p-[10px] bg-[#f2f5ff]">
              <div className="w-[50px] rounded-[5px]">
                <img className="rounded-[5px]" src={user} alt="" />
              </div>
              <div>
                <h2 className="text-[#202C4B] text-[14px] font-[500]">
                  Phone Number
                </h2>
                <p className="text-[13px] text-gray-500">OB,AD</p>
              </div>
            </div>
            <div className="flex items-center gap-[10px] mt-[20px] rounded-[5px] p-[10px]  bg-[#f2f5ff]">
              <div className="w-[50px] rounded-[5px]">
                <img className="rounded-[5px]" src={user} alt="" />
              </div>
              <div>
                <h2 className="text-[#202C4B] text-[14px] font-[500]">
                  Email Address
                </h2>
                <p className="text-[13px] text-gray-500">GG,TR</p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          {/* tab */}
          <div className="flex gap-[20px] overflow-hidden">
            <button
              onClick={() => setTabBtn("details")}
              className={`flex gap-[6px] items-center text-[16px] rounded-b-[5px]  whitespace-nowrap hover:text-[#506EE4] hover:border-b-2 hover:border-b-[#506EE4] ${
                tabBtn === "details"
                  ? "border-b-2 border-b-[#506EE4] text-[#506EE4]"
                  : "text-[#202C4B]"
              }  p-[6px]`}
            >
              <PiStudent />
              Student Details
            </button>
            <button
              onClick={() => setTabBtn("time")}
              className={`flex gap-[6px] items-center text-[16px] rounded-b-[5px]  whitespace-nowrap hover:text-[#506EE4] hover:border-b-2 hover:border-b-[#506EE4] ${
                tabBtn === "time"
                  ? "border-b-2 border-b-[#506EE4] text-[#506EE4]"
                  : "text-[#202C4B]"
              }  p-[6px]`}
            >
              <MdOutlineTableChart />
              Time Table
            </button>
            <button
              onClick={() => setTabBtn("attendance")}
              className={`flex gap-[6px] items-center text-[16px] rounded-b-[5px]  whitespace-nowrap hover:text-[#506EE4] hover:border-b-2 hover:border-b-[#506EE4] ${
                tabBtn === "attendance"
                  ? "border-b-2 border-b-[#506EE4] text-[#506EE4]"
                  : "text-[#202C4B]"
              }  p-[6px]`}
            >
              <LuCalendarDays />
              Attendance
            </button>
            <button
              onClick={() => setTabBtn("fees")}
              className={`flex gap-[6px] items-center text-[16px] rounded-b-[5px]  whitespace-nowrap hover:text-[#506EE4] hover:border-b-2 hover:border-b-[#506EE4] ${
                tabBtn === "fees"
                  ? "border-b-2 border-b-[#506EE4] text-[#506EE4]"
                  : "text-[#202C4B]"
              }  p-[6px]`}
            >
              <LiaHandHoldingUsdSolid />
              Fees
            </button>
            <button
              onClick={() => setTabBtn("exam")}
              className={`flex gap-[6px] items-center text-[16px] rounded-b-[5px]  whitespace-nowrap hover:text-[#506EE4] hover:border-b-2 hover:border-b-[#506EE4] ${
                tabBtn === "exam"
                  ? "border-b-2 border-b-[#506EE4] text-[#506EE4]"
                  : "text-[#202C4B]"
              }  p-[6px]`}
            >
              <BsBookmarkStar />
              Exam & Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
