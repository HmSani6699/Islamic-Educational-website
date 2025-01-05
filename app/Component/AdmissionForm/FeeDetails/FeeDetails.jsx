import React from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import InputField from "../../InputField/InputField";

const FeeDetails = ({ setCurrentPage }) => {
  return (
    <div className="px-[20px] py-[30px] bg-white mt-[20px] mb-[50px] ">
      {/* ======> Fee details form <===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px] lg:mb-[20px]">
        <InputField
          title="খোরাকী"
          type={"text"}
          placeholder={"খোরাকি নির্ধারণ করুন"}
          // setValue={setStudentName}
        />
        <InputField
          title="বেতন"
          type={"text"}
          placeholder={"বেতন নির্ধারণ করুন"}
          // setValue={setStudentName}
        />
        <InputField
          title="বিদ্যুৎ বিল "
          type={"text"}
          placeholder={"বিদ্যুৎ বিল নির্ধারণ করুন"}
          // setValue={setStudentName}
        />
        <InputField
          title="ভর্তি ফি"
          type={"text"}
          placeholder={"ভর্তি ফি নির্ধারণ করুন"}
          // setValue={setStudentName}
        />
      </div>
      {/* ==== Submit button ==== */}
      <div className="flex gap-[20px] justify-end mt-[30px] ">
        <button
          onClick={() => setCurrentPage("learningStatus")}
          className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[8px] rounded-[8px]"
        >
          <GrLinkPrevious />
          Back
        </button>
        <button
          onClick={() => setCurrentPage("student_photo")}
          className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[8px] rounded-[8px]"
        >
          Next
          <GrLinkNext />
        </button>
      </div>
    </div>
  );
};

export default FeeDetails;
