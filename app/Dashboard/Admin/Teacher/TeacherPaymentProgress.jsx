import React from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import InputField from "../../../Component/InputField/InputField";

const TeacherPaymentProgress = ({ setPage }) => {
  return (
    <div className="p-[20px] bg-white mt-[20px] mb-[50px] w-full ">
      <h2 className="mb-[50px] text-center font-semibold text-[22px]">
        বেতন ও বোনাস তথ্য
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:mb-[20px]">
        <InputField
          title="প্রাথমিক ভাবে ওযীফার পরিমাণ "
          type={"text"}
          placeholder={"প্রাথমিক ভাবে ওযীফার পরিমাণ  লিখুন"}
          // setValue={setStudentName}
        />
        <InputField
          title="নির্ধারিত হওয়ার পর ওযীফার পরিমাণ"
          type={"text"}
          placeholder={"নির্ধারিত হওয়ার পর ওযীফার পরিমাণর  লিখুন"}
          // setValue={setStudentName}
        />
        <InputField
          title="বোনাস"
          type={"text"}
          placeholder={"বোনাসে লিখুন"}
          // setValue={setStudentName}
        />
        <InputField
          title="বেতন বাড়ানোর সময়"
          type={"text"}
          placeholder={"বেতন বাড়ানোর সময়  লিখুন"}
          // setValue={setStudentName}
        />
      </div>
      {/* ==== Submit button ==== */}
      <div className="flex gap-[20px] justify-end mt-[30px]">
        <button
          onClick={() => setPage("jobExperience")}
          className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[8px] rounded-[8px]"
        >
          <GrLinkPrevious />
          Back
        </button>
        <button
          onClick={() => setPage("photo")}
          className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[8px] rounded-[8px]"
        >
          Next
          <GrLinkNext />
        </button>
      </div>
    </div>
  );
};

export default TeacherPaymentProgress;
