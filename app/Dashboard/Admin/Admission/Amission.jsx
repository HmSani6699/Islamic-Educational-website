import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import AdmissionList from "./AdmissionList";
import { useNavigate } from "react-router";
import export_icon from "../../../../public/svg/export.svg";
import print from "../../../../public/svg/print.svg";

const Admission = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* ======> Top part <==== */}
      {/* <div className="flex items-center justify-between  px-[20px] py-[10px] bg-[#FFF] lg:mt-[10px] rounded-t-[20px] border-t-[2px] border-[#008000]">
        <h2 className="text-[20px] font-semibold">All Admission (20)</h2>
        <button
          onClick={() => navigate("/admin/admission_form")}
          className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[10px] rounded-[8px]"
        >
          <FaPlus />
          New Admission
        </button>
      </div> */}

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
          <button className="bg-white border rounded-[5px] py-[10px] px-[10px]">
            <img src={print} alt="" />
          </button>
          <button className="bg-[#E9EDF4] text-[14px] text-[#515B73] font-semibold flex items-center gap-[8px] rounded-[5px] py-[8px] px-[15px] shadow-sm">
            <img src={export_icon} alt="" /> Export CSV
          </button>
          <button
            onClick={() => navigate("/admin/admission_form")}
            className="bg-[#506EE4] text-[14px] text-white font-semibold flex items-center gap-[8px] rounded-[5px] py-[8px] px-[15px] shadow-sm"
          >
            <FaPlus className="text-[12px]" /> Add Student
          </button>
        </div>
      </div>
      {/* =====> Tab Part End <===== */}
      {/* =====> Midle part <==== */}
      <AdmissionList />
    </div>
  );
};

export default Admission;
