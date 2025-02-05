import React, { useState } from "react";
import TeaccherSignUp from "./TeaccherSignUp";
import TeacherAddress from "./TeacherAddress";
import TeacherGeneralInfo from "./TeacherGeneralInfo";

const TeacherCreateUpdate = () => {
  const [currentPage, setCurrentPage] = useState("signup");
  return (
    <div className="flex items-center justify-center mb-[50px]">
      {currentPage === "signup" ? (
        <TeaccherSignUp setPage={setCurrentPage} />
      ) : currentPage === "generalInfo" ? (
        <TeacherGeneralInfo setPage={setCurrentPage} />
      ) : currentPage === "address" ? (
        <TeacherAddress setPage={setCurrentPage} />
      ) : null}
    </div>
  );
};

export default TeacherCreateUpdate;
