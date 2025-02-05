import React from "react";
import InputField from "../../../Component/InputField/InputField";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const TeacherEducation = ({ setPage }) => {
  return (
    <div className="p-[20px] bg-white mt-[20px] mb-[50px] w-full ">
      <h2 className="mb-[50px] text-center font-semibold text-[22px]">
        শিক্ষাগত যোগ্যতা
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:mb-[20px]">
        <InputField
          title="শিক্ষার স্তর"
          type={"text"}
          placeholder={"শিক্ষার স্তর নাম লিখুন"}
          // setValue={setStudentName}
        />
        <InputField
          title="পরীক্ষা / ডিগ্রির পদবী"
          type={"text"}
          placeholder={"পরীক্ষা / ডিগ্রির পদবী নাম লিখুন"}
          // setValue={setStudentName}
        />
        <InputField
          title="মাদ্রাসার নাম"
          type={"text"}
          placeholder={"মাদ্রাসার নাম লিখুন"}
          // setValue={setStudentName}
        />
        <InputField
          title="পাসের বছর"
          type={"text"}
          placeholder={"পাসের বছর লিখুন"}
          // setValue={setStudentName}
        />
      </div>
      {/* ==== Submit button ==== */}
      <div className="flex gap-[20px] justify-end mt-[30px]">
        <button
          onClick={() => setPage("address")}
          className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[8px] rounded-[8px]"
        >
          <GrLinkPrevious />
          Back
        </button>
        <button
          onClick={() => setPage("jobExperience")}
          className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[8px] rounded-[8px]"
        >
          Next
          <GrLinkNext />
        </button>
      </div>
    </div>
  );
};

export default TeacherEducation;
