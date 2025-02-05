import React, { useState } from "react";
import TeaccherSignUp from "./TeaccherSignUp";
import TeacherAddress from "./TeacherAddress";
import TeacherGeneralInfo from "./TeacherGeneralInfo";
import TeacherEducation from "./TeacherEducation";
import TeacherJobExperience from "./TeacherJobExperience";
import TeacherPaymentProgress from "./TeacherPaymentProgress";
import TeacherPhoto from "./TeacherPhoto";
import FormSuccess from "../../../Component/AdmissionForm/FormSuccess/FormSuccess";

const TeacherCreateUpdate = ({ currentForm, setCurrentForm }) => {
  return (
    <div className="flex items-center justify-center mb-[50px]">
      {currentForm === "signup" ? (
        <TeaccherSignUp setPage={setCurrentForm} />
      ) : currentForm === "generalInfo" ? (
        <TeacherGeneralInfo setPage={setCurrentForm} />
      ) : currentForm === "address" ? (
        <TeacherAddress setPage={setCurrentForm} />
      ) : currentForm === "education" ? (
        <TeacherEducation setPage={setCurrentForm} />
      ) : currentForm === "jobExperience" ? (
        <TeacherJobExperience setPage={setCurrentForm} />
      ) : currentForm === "payment" ? (
        <TeacherPaymentProgress setPage={setCurrentForm} />
      ) : currentForm === "photo" ? (
        <TeacherPhoto setPage={setCurrentForm} />
      ) : currentForm === "form_success" ? (
        <FormSuccess />
      ) : null}
    </div>
  );
};

export default TeacherCreateUpdate;
