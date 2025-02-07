import React from "react";
import InputField from "../../../../Component/InputField/InputField";

const ClassCeatUpdate = () => {
  return (
    <div className="px-[20px] py-[10px] bg-white pt-[30px] mb-[50px] w-full ">
      <InputField
        title="ক্লাস "
        type={"text"}
        placeholder={"ক্লাসের নাম লিখুন"}
        // setValue={setStudentName}
      />
      {/* ==== Submit button ==== */}
      <div className="flex gap-[20px] justify-end mt-[30px] mb-[10px]">
        <button className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[8px] rounded-[8px]">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ClassCeatUpdate;
