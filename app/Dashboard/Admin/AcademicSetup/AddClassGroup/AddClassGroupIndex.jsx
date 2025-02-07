import React, { useState } from "react";
import ClassGroupCreateUpdate from "./ClassGroupCreateUpdate";
import ClassGriupList from "./ClassGriupList";
import { FaArrowLeft, FaPlus } from "react-icons/fa";

const AddClassGroupIndex = () => {
  const [openForm, setOpenForm] = useState("classGroypList");

  return (
    <div>
      <div className="flex items-center justify-between  px-[20px] py-[10px] bg-white mt-[40px] rounded-t-[20px] border-t-[2px] border-[#008000]">
        <div>
          {openForm === "classGroypList" ? (
            <h2 className="text-[20px] font-semibold">মোট ক্লাস গ্রুপ (20)</h2>
          ) : (
            <h2
              onClick={() => setOpenForm("classGroypList")}
              className="text-[20px] font-semibold py-[6px] flex items-center gap-[10px] cursor-pointer"
            >
              <FaArrowLeft />
              {openForm === "classGroypList"
                ? "নতুন ক্লাস গ্রুপ"
                : "নতুন ক্লাস গ্রুপ"}
            </h2>
          )}
        </div>
        {openForm === "classGroypList" && (
          <button
            onClick={() => setOpenForm("classGroupCreateUpdate")}
            className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[10px] rounded-[8px]"
          >
            <FaPlus />
            নতুন ক্লাস গ্রুপ
          </button>
        )}
      </div>
      {/* =====> Main content  <===== */}
      <div>
        {openForm === "classGroupCreateUpdate" ? (
          <ClassGroupCreateUpdate />
        ) : (
          <ClassGriupList />
        )}
      </div>
    </div>
  );
};

export default AddClassGroupIndex;
