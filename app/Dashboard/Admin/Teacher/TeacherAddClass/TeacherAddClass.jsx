import React, { useState } from "react";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import ClassList from "./ClassList";
import ClassCreateUpdate from "./ClassCreateUpdate";

const TeacherAddClass = () => {
  const [currentPage, setCurrentPage] = useState("teacherList");

  return (
    <div>
      {/* ======> Top part <==== */}
      <div
        className={`bg-white border-t-[2px] border-[#008000] flex items-center justify-between  px-[20px] py-[10px]  mt-[40px] rounded-t-[20px] `}
      >
        <div>
          {currentPage === "teacherList" ? (
            <h2 className="text-[20px] font-semibold">Teacher's Class list</h2>
          ) : (
            <h2
              onClick={() => setCurrentPage("teacherList")}
              className="text-[20px] font-semibold py-[6px] flex items-center gap-[10px] cursor-pointer"
            >
              <FaArrowLeft />
              {currentPage === "teacherList" ? "Teacher Create" : "Add Class"}
            </h2>
          )}
        </div>

        {currentPage === "teacherList" && (
          <button
            onClick={() => setCurrentPage("classCreateUpdate")}
            className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[10px] rounded-[8px]"
          >
            <FaPlus />
            Add Class
          </button>
        )}
      </div>

      {/* =====> create update and list part <===== */}
      {currentPage === "teacherList" ? (
        <ClassList setPage={setCurrentPage} />
      ) : currentPage === "classCreateUpdate" ? (
        <ClassCreateUpdate />
      ) : null}
    </div>
  );
};

export default TeacherAddClass;
