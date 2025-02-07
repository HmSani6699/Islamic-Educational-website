import React, { useState } from "react";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import BivhagCreateUpdate from "./BivhagCreateUpdate";
import BivhagList from "./BivhagList";

const AddBivhagIndex = () => {
  const [openForm, setOpenForm] = useState("bivhagList");

  return (
    <div>
      <div className="flex items-center justify-between  px-[20px] py-[10px] bg-white mt-[40px] rounded-t-[20px] border-t-[2px] border-[#008000]">
        <div>
          {openForm === "bivhagList" ? (
            <h2 className="text-[20px] font-semibold">মোট বিভাগ (20)</h2>
          ) : (
            <h2
              onClick={() => setOpenForm("bivhagList")}
              className="text-[20px] font-semibold py-[6px] flex items-center gap-[10px] cursor-pointer"
            >
              <FaArrowLeft />
              {openForm === "bivhagList" ? "নতুন বিভাগ" : "নতুন বিভাগ"}
            </h2>
          )}
        </div>
        {openForm === "bivhagList" && (
          <button
            onClick={() => setOpenForm("bivhagCreateUpdate")}
            className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[10px] rounded-[8px]"
          >
            <FaPlus />
            নতুন বিভাগ
          </button>
        )}
      </div>
      {/* =====> Main content  <===== */}
      <div>
        {openForm === "bivhagCreateUpdate" ? (
          <BivhagCreateUpdate />
        ) : (
          <BivhagList />
        )}
      </div>
    </div>
  );
};

export default AddBivhagIndex;
