import React from "react";
import InputField from "../../../Component/InputField/InputField";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const TeacherAddress = ({ setPage }) => {
  return (
    <div className="px-[20px] py-[10px] bg-white mt-[20px] mb-[50px] w-full ">
      <h2 className="mt-[10px] mb-[40px] text-center font-semibold text-[22px]">
        শিক্ষকের ঠিকানা
      </h2>

      {/* ======> Address form <====== */}
      <div>
        <h2 className="text-[20px] font-semibold my-[20px]">স্থায়ী ঠিকানা</h2>
        {/* === father info  === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:mb-[20px]">
          <InputField
            title="গ্রাম"
            type={"text"}
            placeholder={"গ্রামের নাম লিখুন"}
            // setValue={setStudentName}
          />
          <InputField
            title="ডাকঘর"
            type={"text"}
            placeholder={"ডাকঘরের নাম লিখুন"}
            // setValue={setStudentName}
          />
          <InputField
            title="থানা"
            type={"text"}
            placeholder={"থানার নাম লিখুন"}
            // setValue={setStudentName}
          />
          <InputField
            title="জেলা"
            type={"text"}
            placeholder={"জেলার নাম লিখুন"}
            // setValue={setStudentName}
          />
        </div>
        <h2 className="text-[20px] font-semibold my-[20px]">বর্তমান ঠিকানা</h2>
        {/* === father info  === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:mb-[20px]">
          <InputField
            title="গ্রাম"
            type={"text"}
            placeholder={"গ্রামের নাম লিখুন"}
            // setValue={setStudentName}
          />
          <InputField
            title="ডাকঘর"
            type={"text"}
            placeholder={"ডাকঘরের নাম লিখুন"}
            // setValue={setStudentName}
          />
          <InputField
            title="থানা"
            type={"text"}
            placeholder={"থানার নাম লিখুন"}
            // setValue={setStudentName}
          />
          <InputField
            title="জেলা"
            type={"text"}
            placeholder={"জেলার নাম লিখুন"}
            // setValue={setStudentName}
          />
        </div>
      </div>

      {/* ==== Submit button ==== */}
      <div className="flex gap-[20px] justify-end mt-[30px]">
        <button
          onClick={() => setPage("generalInfo")}
          className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[8px] rounded-[8px]"
        >
          <GrLinkPrevious />
          Back
        </button>
        <button
          onClick={() => setPage("education")}
          className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[8px] rounded-[8px]"
        >
          Next
          <GrLinkNext />
        </button>
      </div>
    </div>
  );
};

export default TeacherAddress;
