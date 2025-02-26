import React from "react";
import ParentsInformation from "./ParentsInformation/ParentsInformation";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import Address from "./Address/Address";
import PreviousOrganization from "./PreviousOrganization/PreviousOrganization";
import SibilingInformation from "./SibilingInformation/SibilingInformation";

const AdmissionForm = () => {
  return (
    <div>
      {/* =====> Tab Part Start <===== */}
      <div className="flex items-center justify-between pt-[10px] pb-[20px]">
        <div>
          <h2 className="text-[20px] font-semibold text-[#202C4B]">
            Add Student
          </h2>
          <div className="flex items-center gap-[10px]">
            <p className="text-[#6A7287] text-[14px]">Dashboard</p>
            <p className="text-[#6a72876c]">/</p>
            <p className="text-[#6A7287] text-[14px]">Student</p>
            <p className="text-[#6a72876c]">/</p>
            <p className="text-[#6A7287] text-[14px]">Add Student</p>
          </div>
        </div>
      </div>
      {/*  */}
      <PersonalInformation />
      <ParentsInformation />
      <SibilingInformation />
      <Address />
      <PreviousOrganization />
      {/*  */}
      <div className="flex items-end justify-end gap-[10px] mb-[15px]">
        <button className="text-[14px] font-semibold text-[#202c4bab] py-[8px] px-[15px] bg-gray-200 rounded-[5px]  border">
          Cancle
        </button>
        <button className="text-[14px] font-semibold text-[#fff] bg-[#506EE4] py-[8px] px-[15px] rounded-[5px]  border">
          Add Student
        </button>
      </div>
    </div>
  );
};

export default AdmissionForm;
