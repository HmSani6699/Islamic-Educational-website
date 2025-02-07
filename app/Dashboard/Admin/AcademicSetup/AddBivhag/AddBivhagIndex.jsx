import React from "react";
import { FaPlus } from "react-icons/fa";

const AddBivhagIndex = () => {
  const [openForm, setOpenForm] = useState("bivhagList");

  return (
    <div>
      <div className="flex items-center justify-between  px-[20px] py-[10px] bg-white mt-[40px] rounded-t-[20px] border-t-[2px] border-[#008000]">
        <h2 className="text-[20px] font-semibold">মোট বিভাগ (20)</h2>
        <button
          onClick={() => setOpenForm("bivhagCreateUpdate")}
          className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[10px] rounded-[8px]"
        >
          <FaPlus />
          নতুন বিভাগ
        </button>
      </div>

      <div></div>
    </div>
  );
};

export default AddBivhagIndex;
