import React, { useState } from "react";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import CategoryCreateUpdate from "./CategoryCreateUpdate";
import CategoryList from "./CategoryList";

const AddCategory = () => {
  const [openForm, setOpenForm] = useState("categoryList");

  return (
    <div>
      <div className="flex items-center justify-between  px-[20px] py-[10px] bg-white mt-[40px] rounded-t-[20px] border-t-[2px] border-[#008000]">
        <div>
          {openForm === "categoryList" ? (
            <h2 className="text-[20px] font-semibold">মোট শ্রেণী (20)</h2>
          ) : (
            <h2
              onClick={() => setOpenForm("categoryList")}
              className="text-[20px] font-semibold py-[6px] flex items-center gap-[10px] cursor-pointer"
            >
              <FaArrowLeft />
              {openForm === "categoryList" ? "নতুন শ্রেণী" : "নতুন শ্রেণী"}
            </h2>
          )}
        </div>
        {openForm === "categoryList" && (
          <button
            onClick={() => setOpenForm("bivhagCreateUpdate")}
            className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[10px] rounded-[8px]"
          >
            <FaPlus />
            নতুন শ্রেণী
          </button>
        )}
      </div>
      {/* =====> Main content  <===== */}
      <div>
        {openForm === "bivhagCreateUpdate" ? (
          <CategoryCreateUpdate />
        ) : (
          <CategoryList />
        )}
      </div>
    </div>
  );
};

export default AddCategory;
