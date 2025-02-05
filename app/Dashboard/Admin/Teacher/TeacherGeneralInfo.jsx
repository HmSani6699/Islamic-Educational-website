import React from "react";
import InputField from "../../../Component/InputField/InputField";
import { GrLinkNext } from "react-icons/gr";

const TeacherGeneralInfo = ({ setPage }) => {
  return (
    <div className="bg-white p-[20px] rounded-[10px] mt-10  w-full">
      <h2 className="text-[22px]  font-semibold text-center mt-[8px]">
        শিক্ষকের ঠিকানা
      </h2>
      {/* =====>  Create acount form <===== */}
      <div>
        <div className="mt-[50px] grid grid-cols-1 lg:grid-cols-2  gap-[25px]">
          <InputField
            title="শিক্ষকের নাম"
            type={"text"}
            placeholder={"আপনার শিক্ষকের নাম লিখুন"}
            setValue={""}
          />

          <InputField
            title="ফোন নম্বর"
            type={"text"}
            placeholder={"ফোন নম্বর লিখুন"}
            setValue={""}
          />
          <InputField
            title="পিতার নাম"
            type={"text"}
            placeholder={"পিতার নাম লিখুন"}
            setValue={""}
          />
          <InputField
            title="মায়ের নাম"
            type={"text"}
            placeholder={"মায়ের নাম লিখুন"}
            setValue={""}
          />
          <InputField
            title="জন্ম তারিখ "
            type={"text"}
            placeholder={"জন্ম তারিখ  লিখুন"}
            setValue={""}
          />
          <InputField
            title="জাতীয় পরিচয়পত্র / জন্ম সনদ"
            type={"text"}
            placeholder={"জাতীয় পরিচয়পত্র / জন্ম সনদ"}
            setValue={""}
          />
        </div>
        <div className="flex justify-end mt-[30px]">
          <button
            onClick={() => setPage("address")}
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

export default TeacherGeneralInfo;
