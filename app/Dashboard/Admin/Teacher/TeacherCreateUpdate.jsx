import React, { useState } from "react";
import TeaccherSignUp from "./TeaccherSignUp";
import TeacherAddress from "./TeacherAddress";
import TeacherGeneralInfo from "./TeacherGeneralInfo";
import TeacherEducation from "./TeacherEducation";
import TeacherJobExperience from "./TeacherJobExperience";
import TeacherPaymentProgress from "./TeacherPaymentProgress";
import TeacherPhoto from "./TeacherPhoto";
import FormSuccess from "../../../Component/AdmissionForm/FormSuccess/FormSuccess";

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
      ) : currentPage === "education" ? (
        <TeacherEducation setPage={setCurrentPage} />
      ) : currentPage === "jobExperience" ? (
        <TeacherJobExperience setPage={setCurrentPage} />
      ) : currentPage === "payment" ? (
        <TeacherPaymentProgress setPage={setCurrentPage} />
      ) : currentPage === "photo" ? (
        <TeacherPhoto setPage={setCurrentPage} />
      ) : currentPage === "form_success" ? (
        <FormSuccess />
      ) : null}
    </div>
  );
};

export default TeacherCreateUpdate;
