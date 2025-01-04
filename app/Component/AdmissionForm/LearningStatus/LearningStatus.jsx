import React from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import InputField from "../../InputField/InputField";
import SelectInputField from "../../SelectInputField/SelectInputField";

const LearningStatus = ({ setCurrentPage }) => {
  return (
    <div className="px-[20px] py-[10px] bg-white mt-[20px] mb-[50px] ">
      {/* =====> Form div  <===== */}
      <div className="mt-[30px]">
        {/* === father info  === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px] lg:mb-[20px]">
          <SelectInputField
            title={"নতুন & পুরাতন"}
            options={[
              { id: 1, value: "নতুন" },
              { id: 2, value: "পুরাতন" },
            ]}
            setValue={""}
          />
          <SelectInputField
            title={"আবাসিক & অনাবাসিক"}
            options={[
              { id: 1, value: "আবাসিক" },
              { id: 2, value: "অনাবাসিক" },
            ]}
            setValue={""}
          />
          <SelectInputField
            title={"জামাআত/শ্রেণি নির্ধারণ"}
            options={[
              { id: 1, value: "আবাসিক" },
              { id: 2, value: "অনাবাসিক" },
            ]}
            setValue={""}
          />

          <InputField
            title="পূর্বের প্রতিষ্ঠানের নাম"
            type={"text"}
            placeholder={"পূর্বের প্রতিষ্ঠানের নাম লিখুন"}
            // setValue={setStudentName}
          />

          <InputField
            title="কি পড়িয়াছে"
            type={"text"}
            placeholder={"পূর্বের কি পড়িয়াছে নাম লিখুন"}
            // setValue={setStudentName}
          />
          <InputField
            title="কি পড়তে ইচ্ছুক"
            type={"text"}
            placeholder={"কি পড়তে ইচ্ছুক নাম লিখুন"}
            // setValue={setStudentName}
          />
          <InputField
            title="পঠিত বিষয়সমূহের প্রাপ্ত ফলাফল"
            type={"text"}
            placeholder={"পঠিত বিষয়সমূহের প্রাপ্ত ফলাফল লিখুন"}
            // setValue={setStudentName}
          />
          <InputField
            title="তালিমী মুরব্বী"
            type={"text"}
            placeholder={"তালিমী মুরব্বীর নাম লিখুন"}
            // setValue={setStudentName}
          />
        </div>
      </div>

      {/* ==== Submit button ==== */}
      <div className="flex gap-[20px] justify-end mt-[30px] mb-[15px]">
        <button
          onClick={() => setCurrentPage("address")}
          className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[8px] rounded-[8px]"
        >
          <GrLinkPrevious />
          Back
        </button>
        <button
          onClick={() => setCurrentPage("feeDetails")}
          className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[8px] rounded-[8px]"
        >
          Next
          <GrLinkNext />
        </button>
      </div>
    </div>
  );
};

export default LearningStatus;
