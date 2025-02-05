import React from "react";
import InputField from "../../../Component/InputField/InputField";
import { GrLinkNext } from "react-icons/gr";

const TeaccherSignUp = () => {
  return (
    <div className="bg-white p-[20px] rounded-[10px] mt-10 w-[500px]">
      <h2 className="text-[22px]  font-semibold text-center mt-[8px]">
        শিক্ষক অ্যাকাউন্ট
      </h2>

      {/* =====>  Create acount form <===== */}
      <div>
        <div className="mt-[50px] flex flex-col gap-[25px]">
          <InputField
            title="শিক্ষকের নাম"
            type={"text"}
            placeholder={"আপনার শিক্ষকের নাম লিখুন"}
            setValue={""}
          />
          <InputField
            title="শিক্ষকের ইমেল"
            type={"text"}
            placeholder={"আপনার শিক্ষকের ইমেল লিখুন"}
            setValue={""}
          />
          <InputField
            title="ফোন নম্বর"
            type={"text"}
            placeholder={"ফোন নম্বর লিখুন"}
            setValue={""}
          />
          <InputField
            title="পাসওয়ার্ড"
            type={"text"}
            placeholder={"পাসওয়ার্ড লিখুন"}
            setValue={""}
          />
          <InputField
            title="পাসওয়ার্ড নিশ্চিত করুন"
            type={"text"}
            placeholder={"পাসওয়ার্ড নিশ্চিত করুন"}
            setValue={""}
          />
        </div>
        <div className="flex justify-end mt-[30px]">
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

export default TeaccherSignUp;
