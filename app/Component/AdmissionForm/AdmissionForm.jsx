// import React, { useState } from "react";
// import About from "./About/About";
// import Address from "./Address/Address";
// import LearningStatus from "./LearningStatus/LearningStatus";
// import FeeDetails from "./FeeDetails/FeeDetails";
// import StudentPhoto from "./StudentPhoto/StudentPhoto";
// import FormSuccess from "./FormSuccess/FormSuccess";

// const AdmissionForm = () => {
//   const [currentPage, setCurrentPage] = useState("about");
//   return (
//     <div>
//       {currentPage !== "form_success" && (
//         <div className="px-[20px] py-[30px] bg-white mt-[40px]  rounded-t-[20px] border-t-[2px] border-[#008000]">
//           <h2 className="text-[25px] font-semibold text-center mb-[40px]">
//             ভর্তি ফরম
//           </h2>
//           {/* =====> Progress  <===== */}
//           <div className="mb-[20px]">
//             <div className="">
//               <div className="flex items-center justify-between z-10">
//                 <div className=" bg-gray-200 rounded-full"></div>
//                 <div className="h-[25px] w-[25px] bg-gray-200 rounded-full"></div>
//                 <div className="h-[25px] w-[25px] bg-gray-200 rounded-full"></div>
//                 <div className="h-[25px] w-[25px] bg-gray-200 rounded-full"></div>
//                 <div className="h-[25px] w-[25px] bg-gray-200 rounded-full"></div>
//                 <div className="h-[25px] w-[25px] bg-gray-200 rounded-full"></div>
//                 <div className="h-[25px] w-[25px] bg-gray-200 rounded-full"></div>
//               </div>
//               <div className="border-[3px] rounded-full -mt-[15.5px]"></div>
//             </div>
//             <div className="-mt-[15.5px]">
//               <div className="flex items-center justify-between z-10">
//                 <div className=" bg-gray-200 rounded-full"></div>
//                 <div className="h-[25px] w-[25px] bg-[#008000] rounded-full"></div>
//                 <div className="h-[25px] w-[25px] bg-[#008000] rounded-full"></div>
//                 <div className="h-[25px] w-[25px] bg-[#008000] rounded-full"></div>
//                 <div className="h-[25px] w-[25px] bg-gray-200 rounded-full"></div>
//                 <div className="h-[25px] w-[25px] bg-gray-200 rounded-full"></div>
//                 <div className="h-[25px] w-[25px] bg-gray-200 rounded-full"></div>
//               </div>
//               <div className="border-[3px] border-[#008000] rounded-full -mt-[15.5px] w-[50%]"></div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ====> Registrtion Form  <==== */}
//       {currentPage === "about" ? (
//         <About setCurrentPage={setCurrentPage} />
//       ) : currentPage === "address" ? (
//         <Address setCurrentPage={setCurrentPage} />
//       ) : currentPage === "learningStatus" ? (
//         <LearningStatus setCurrentPage={setCurrentPage} />
//       ) : currentPage === "feeDetails" ? (
//         <FeeDetails setCurrentPage={setCurrentPage} />
//       ) : currentPage === "student_photo" ? (
//         <StudentPhoto setCurrentPage={setCurrentPage} />
//       ) : currentPage === "form_success" ? (
//         <FormSuccess />
//       ) : (
//         <h2>page nai</h2>
//       )}
//     </div>
//   );
// };

// export default AdmissionForm;

// ================================================//
import React from "react";
import { FaPlus } from "react-icons/fa";
import export_icon from "../../../public/svg/export.svg";
import print from "../../../public/svg/print.svg";
import ParentsInformation from "./ParentsInformation/ParentsInformation";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import Address from "./Address/Address";
import PreviousOrganization from "./PreviousOrganization/PreviousOrganization";

const AdmissionForm = () => {
  return (
    <div>
      {/* =====> Tab Part Start <===== */}
      <div className="flex items-center justify-between pt-[10px] pb-[20px]">
        <div>
          <h2 className="text-[20px] font-semibold text-[#202C4B]">
            Add Student
          </h2>
          <div className="flex items-center gap-[10px]">
            <p className="text-[#6A7287] text-[14px]">Dashboard</p>
            <p className="text-[#6a72876c]">/</p>
            <p className="text-[#6A7287] text-[14px]">Student</p>
            <p className="text-[#6a72876c]">/</p>
            <p className="text-[#6A7287] text-[14px]">Add Student</p>
          </div>
        </div>
      </div>
      {/*  */}
      <PersonalInformation />
      <ParentsInformation />
      <Address />
      <PreviousOrganization />
      {/*  */}
      <div className="flex items-end justify-end gap-[10px] mb-[15px]">
        <button className="text-[14px] font-semibold text-[#202c4bab] py-[8px] px-[15px] bg-gray-200 rounded-[5px]  border">
          Cancle
        </button>
        <button className="text-[14px] font-semibold text-[#fff] bg-[#506EE4] py-[8px] px-[15px] rounded-[5px]  border">
          Add Student
        </button>
      </div>
    </div>
  );
};

export default AdmissionForm;
