import React, { useState } from "react";
import ClassCeatUpdate from "./ClassCeatUpdate";
import ClassList from "./ClassList";
import { FaArrowLeft, FaPlus } from "react-icons/fa";

const AddClassIndex = () => {
  const [openForm, setOpenForm] = useState("classList");

  return (
    <div>
      <div className="flex items-center justify-between  px-[20px] py-[10px] bg-white mt-[40px] rounded-t-[20px] border-t-[2px] border-[#008000]">
        <div>
          {openForm === "classList" ? (
            <h2 className="text-[20px] font-semibold">মোট ক্লাস (20)</h2>
          ) : (
            <h2
              onClick={() => setOpenForm("classList")}
              className="text-[20px] font-semibold py-[6px] flex items-center gap-[10px] cursor-pointer"
            >
              <FaArrowLeft />
              {openForm === "classList" ? "নতুন ক্লাস" : "নতুন ক্লাস"}
            </h2>
          )}
        </div>
        {openForm === "classList" && (
          <button
            onClick={() => setOpenForm("bivhagCreateUpdate")}
            className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[10px] rounded-[8px]"
          >
            <FaPlus />
            নতুন ক্লাস
          </button>
        )}
      </div>
      {/* =====> Main content  <===== */}
      <div>
        {openForm === "bivhagCreateUpdate" ? (
          <ClassCeatUpdate />
        ) : (
          <ClassList />
        )}
      </div>
    </div>
  );
};

export default AddClassIndex;
