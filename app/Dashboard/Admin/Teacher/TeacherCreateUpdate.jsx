import React, { useState } from "react";
import TeaccherSignUp from "./TeaccherSignUp";
import TeacherAddress from "./TeacherAddress";
import TeacherGeneralInfo from "./TeacherGeneralInfo";

const TeacherCreateUpdate = () => {
  const [currentPage, setCurrentPage] = useState("signup");
  return (
    <div className="flex items-center justify-center mb-[50px]">
      {currentPage === "signup" ? (
        <TeaccherSignUp setPge={setCurrentPage} />
      ) : currentPage === "generalInfo" ? (
        <TeacherGeneralInfo setPge={setCurrentPage} />
      ) : currentPage === "address" ? (
        <TeacherAddress setPge={setCurrentPage} />
      ) : null}
    </div>
  );
};

export default TeacherCreateUpdate;
