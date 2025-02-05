import React from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import InputField from "../../../Component/InputField/InputField";

const TeacherJobExperience = ({ setPage }) => {
  return (
    <div className="p-[20px] bg-white mt-[20px] mb-[50px] w-full ">
      <h2 className="mb-[50px] text-center font-semibold text-[22px]">
        শিক্ষকতার অভিজ্ঞতা
      </h2>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:mb-[20px]">
          <InputField
            title="মাদ্রাসার নাম"
            type={"text"}
            placeholder={"মাদ্রাসার নাম লিখুন"}
            // setValue={setStudentName}
          />
          <InputField
            title="পদবী"
            type={"text"}
            placeholder={"পদবীর নাম লিখুন"}
            // setValue={setStudentName}
          />
          <InputField
            title="বিভাগ"
            type={"text"}
            placeholder={"বিভাগের নাম লিখুন"}
            // setValue={setStudentName}
          />
          <InputField
            title="অভিজ্ঞতা"
            type={"text"}
            placeholder={"অভিজ্ঞতা  লিখুন"}
            // setValue={setStudentName}
          />
        </div>
        <InputField
          title="মাদ্রাসার ঠিকানা"
          type={"text"}
          placeholder={"মাদ্রাসার ঠিকানা লিখুন"}
          // setValue={setStudentName}
        />
      </div>
      {/* ==== Submit button ==== */}
      <div className="flex gap-[20px] justify-end mt-[30px]">
        <button
          onClick={() => setPage("education")}
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

export default TeacherJobExperience;
