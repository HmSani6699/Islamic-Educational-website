import React, { useState } from "react";
import InputField from "../../InputField/InputField";
import { GrLinkNext } from "react-icons/gr";

const About = ({ setCurrentPage }) => {
  const [studentName, setStudentName] = useState();
  return (
    <div className="px-[20px] py-[10px] bg-white mt-[20px] mb-[50px] ">
      <h2 className="text-[20px] font-semibold my-[20px]">ছাত্র সম্পর্কে</h2>

      {/* ====> About form <==== */}
      <div className="mt-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:mb-[20px]">
          <InputField
            title="ছাত্রের নাম"
            type={"text"}
            placeholder={"আপনার ছাত্রের নাম লিখুন"}
            setValue={setStudentName}
          />
          <InputField
            title="জন্ম তারিখ"
            type={"text"}
            placeholder={"আপনার ছাত্রের জন্ম তারিখ লিখুন"}
            setValue={setStudentName}
          />
        </div>

        {/* ====  Date no ==== */}

        <div className="lg:mb-[20px]">
          <p className="text-[16px] font-[400] leading-[22px]">
            জন্ম নিবন্ধন নং
          </p>
          <div className="flex">
            <InputField
              type={"text"}
              placeholder={"0"}
              setValue={setStudentName}
            />
            <InputField
              type={"text"}
              placeholder={"0"}
              setValue={setStudentName}
            />
            <InputField
              type={"text"}
              placeholder={"0"}
              setValue={setStudentName}
            />
            <InputField
              type={"text"}
              placeholder={"0"}
              setValue={setStudentName}
            />
            <InputField
              type={"text"}
              placeholder={"0"}
              setValue={setStudentName}
            />
            <InputField
              type={"text"}
              placeholder={"0"}
              setValue={setStudentName}
            />
            <InputField
              type={"text"}
              placeholder={"0"}
              setValue={setStudentName}
            />
            <InputField
              type={"text"}
              placeholder={"0"}
              setValue={setStudentName}
            />
            <InputField
              type={"text"}
              placeholder={"0"}
              setValue={setStudentName}
            />
            <InputField
              type={"text"}
              placeholder={"0"}
              setValue={setStudentName}
            />
            <InputField
              type={"text"}
              placeholder={"0"}
              setValue={setStudentName}
            />
            <InputField
              type={"text"}
              placeholder={"0"}
              setValue={setStudentName}
            />
            <InputField
              type={"text"}
              placeholder={"0"}
              setValue={setStudentName}
            />
            <InputField
              type={"text"}
              placeholder={"0"}
              setValue={setStudentName}
            />
            <InputField
              type={"text"}
              placeholder={"0"}
              setValue={setStudentName}
            />
            <InputField
              type={"text"}
              placeholder={"0"}
              setValue={setStudentName}
            />
            <InputField
              type={"text"}
              placeholder={"0"}
              setValue={setStudentName}
            />
          </div>
        </div>

        {/* === father info  === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:mb-[20px]">
          <InputField
            title="পিতার নাম"
            type={"text"}
            placeholder={"আপনার ছাত্রের পিতার নাম লিখুন"}
            setValue={setStudentName}
          />
          <InputField
            title="পেশা"
            type={"text"}
            placeholder={"পেশা"}
            setValue={setStudentName}
          />
        </div>
        {/* === অভিভাবকের  info  === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:mb-[20px]">
          <InputField
            title="অভিভাবকের নাম"
            type={"text"}
            placeholder={"আপনার ছাত্রের অভিভাবকের নাম লিখুন"}
            setValue={setStudentName}
          />
          <InputField
            title="সম্পর্ক"
            type={"text"}
            placeholder={"সম্পর্ক"}
            setValue={setStudentName}
          />
        </div>
        {/* === Phone number  === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:mb-[20px]">
          <InputField
            title="মোবাইল"
            type={"text"}
            placeholder={"আপনার ছাত্রের মোবাইল সংখ্যা লিখুন"}
            setValue={setStudentName}
          />
          <div className="mt-[22px]">
            <InputField
              type={"text"}
              placeholder={"আপনার ছাত্রের মোবাইল সংখ্যা লিখুন"}
              setValue={setStudentName}
            />
          </div>
        </div>
        {/* ==== Submit button ==== */}
        <div className="flex justify-end mt-[30px] mb-[15px]">
          <button
            onClick={() => setCurrentPage("address")}
            className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[8px] rounded-[8px]"
          >
            Next
            <GrLinkNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
