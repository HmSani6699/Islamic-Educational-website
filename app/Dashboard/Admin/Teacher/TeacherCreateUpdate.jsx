import React, { useState } from "react";
import TeaccherSignUp from "./TeaccherSignUp";

const TeacherCreateUpdate = () => {
  const [currentPage, setCurrentPage] = useState("signup");
  return (
    <div className="flex items-center justify-center mb-[50px]">
      {currentPage === "signup" ? <TeaccherSignUp /> : null}
    </div>
  );
};

export default TeacherCreateUpdate;
