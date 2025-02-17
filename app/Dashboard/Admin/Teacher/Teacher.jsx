import React, { useState } from "react";
import TeacherList from "./TeacherList";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import TeacherCreateUpdate from "./TeacherCreateUpdate";

const Teacher = () => {
  const [currentPage, setCurrentPage] = useState("teacherList");
  const [createTechercurrentForm, setCreateTechercurrentForm] =
    useState("signup");

  return (
    <div>
      {/* ======> Top part <==== */}
      <div
        className={`${currentPage === "teacherList" ? "block" : "hidden"}
        bg-white border-t-[2px] border-[#008000]
         flex items-center justify-between  px-[20px] py-[10px]  mt-[40px] rounded-t-[20px] `}
      >
        <div>
          <h2 className="text-[20px] font-semibold">Teacher List</h2>
        </div>

        <button
          onClick={() => setCurrentPage("teacherCreateUpdate")}
          className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[10px] rounded-[8px]"
        >
          <FaPlus />
          New Teacher
        </button>
      </div>

      <div
        className={`${
          currentPage === "teacherList" ||
          currentPage === "form_success" ||
          createTechercurrentForm === "signup"
            ? "hidden"
            : "block"
        } mt-[20px]`}
      >
        <h2 className="text-[25px] font-semibold text-center mb-[40px]">
          ভর্তি ফরম
        </h2>

        {/* =====> Progress  <===== */}
        <div className="mb-[20px] mt-[50px]">
          <div className="">
            <div className="flex items-center justify-between z-10">
              <div className=" bg-gray-200 rounded-full"></div>
              <div className="h-[25px] w-[25px] bg-gray-200 rounded-full"></div>
              <div className="h-[25px] w-[25px] bg-gray-200 rounded-full"></div>
              <div className="h-[25px] w-[25px] bg-gray-200 rounded-full"></div>
              <div className="h-[25px] w-[25px] bg-gray-200 rounded-full"></div>
              <div className="h-[25px] w-[25px] bg-gray-200 rounded-full"></div>
              <div className="h-[25px] w-[25px] bg-gray-200 rounded-full"></div>
            </div>
            <div className="border-[3px] rounded-full -mt-[15.5px]"></div>
          </div>
          <div className="-mt-[15.5px]">
            <div className="flex items-center justify-between z-10">
              <div className=" bg-gray-200 rounded-full"></div>
              <div className="h-[25px] w-[25px] bg-[#008000] rounded-full"></div>
              <div className="h-[25px] w-[25px] bg-[#008000] rounded-full"></div>
              <div className="h-[25px] w-[25px] bg-[#008000] rounded-full"></div>
              <div className="h-[25px] w-[25px] bg-gray-200 rounded-full"></div>
              <div className="h-[25px] w-[25px] bg-gray-200 rounded-full"></div>
              <div className="h-[25px] w-[25px] bg-gray-200 rounded-full"></div>
            </div>
            <div className="border-[3px] border-[#008000] rounded-full -mt-[15.5px] w-[50%]"></div>
          </div>
        </div>
      </div>

      {currentPage === "teacherList" ? (
        <TeacherList setPage={setCurrentPage} />
      ) : currentPage === "teacherCreateUpdate" ? (
        <TeacherCreateUpdate
          currentForm={createTechercurrentForm}
          setCurrentForm={setCreateTechercurrentForm}
        />
      ) : null}
    </div>
  );
};

export default Teacher;
