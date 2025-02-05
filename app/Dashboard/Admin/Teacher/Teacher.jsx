import React, { useState } from "react";
import TeacherList from "./TeacherList";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import TeacherCreateUpdate from "./TeacherCreateUpdate";

const Teacher = () => {
  const [currentPage, setCurrentPage] = useState("teacherList");

  return (
    <div>
      {/* ======> Top part <==== */}
      <div className="flex items-center justify-between  px-[20px] py-[10px] bg-white mt-[40px] rounded-t-[20px] border-t-[2px] border-[#008000]">
        <div>
          {currentPage === "teacherList" ? (
            <h2 className="text-[20px] font-semibold">Teacher List</h2>
          ) : (
            <h2
              onClick={() => setCurrentPage("teacherList")}
              className="text-[20px] font-semibold py-[6px] flex items-center gap-[10px] cursor-pointer"
            >
              <FaArrowLeft /> Teacher Create
            </h2>
          )}
        </div>

        {currentPage === "teacherList" && (
          <button
            onClick={() => setCurrentPage("teacherCreateUpdate")}
            className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[10px] rounded-[8px]"
          >
            <FaPlus />
            New Teacher
          </button>
        )}
      </div>
      {currentPage === "teacherList" ? (
        <TeacherList />
      ) : currentPage === "teacherCreateUpdate" ? (
        <TeacherCreateUpdate />
      ) : null}
    </div>
  );
};

export default Teacher;
