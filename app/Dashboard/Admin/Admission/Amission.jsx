import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import AdmissionList from "./AdmissionList";
import { useNavigate } from "react-router";

const Admission = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* ======> Top part <==== */}
      <div className="flex items-center justify-between  px-[20px] py-[10px] bg-[#FFF] lg:mt-[10px] rounded-t-[20px] border-t-[2px] border-[#008000]">
        <h2 className="text-[20px] font-semibold">All Admission (20)</h2>
        <button
          onClick={() => navigate("/admin/admission_form")}
          className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[10px] rounded-[8px]"
        >
          <FaPlus />
          New Admission
        </button>
      </div>
      {/* =====> Midle part <==== */}
      <AdmissionList />
    </div>
  );
};

export default Admission;
