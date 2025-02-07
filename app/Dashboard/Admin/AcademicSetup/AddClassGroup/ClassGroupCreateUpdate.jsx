import React from "react";
import InputField from "../../../../Component/InputField/InputField";
import SelectInputField from "../../../../Component/SelectInputField/SelectInputField";

const ClassGroupCreateUpdate = () => {
  return (
    <div className="px-[20px] py-[10px] bg-white pt-[30px] mb-[50px] w-full ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
        <SelectInputField
          title="বিভাগ "
          options={[
            { id: 1, value: "নতুন" },
            { id: 2, value: "পুরাতন" },
          ]}
          setValue={""}
        />
        <SelectInputField
          title="ক্লাস"
          options={[
            { id: 1, value: "নতুন" },
            { id: 2, value: "পুরাতন" },
          ]}
          setValue={""}
        />
        <SelectInputField
          title="গ্রুপের "
          options={[
            { id: 1, value: "নতুন" },
            { id: 2, value: "পুরাতন" },
          ]}
          setValue={""}
        />

        <InputField
          title="মোট সিট "
          type={"text"}
          placeholder={"মোট  সিট সংখ্যা লিখুন"}
          // setValue={setStudentName}
        />
      </div>
      {/* ==== Submit button ==== */}
      <div className="flex gap-[20px] justify-end mt-[30px] mb-[10px]">
        <button className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[8px] rounded-[8px]">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ClassGroupCreateUpdate;
