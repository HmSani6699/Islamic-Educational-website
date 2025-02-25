// import React from "react";
// import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
// import InputField from "../../InputField/InputField";

// const Address = ({ setCurrentPage }) => {
//   return (
//     <div className="px-[20px] py-[10px] bg-white mt-[20px] mb-[50px] ">
//       {/* <h2 className="text-[20px] font-semibold text-center my-[20px]">
//         ছাত্র সম্পর্কে
//       </h2> */}

//       {/* ======> Address form <====== */}
//       <div className="mt-[30px]">
//         <h2 className="text-[20px] font-semibold my-[20px]">স্থায়ী ঠিকানা</h2>
//         {/* === father info  === */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:mb-[20px]">
//           <InputField
//             title="গ্রাম"
//             type={"text"}
//             placeholder={"আপনার ছাত্রের গ্রামের নাম লিখুন"}
//             // setValue={setStudentName}
//           />
//           <InputField
//             title="ডাকঘর"
//             type={"text"}
//             placeholder={"আপনার ছাত্রের ডাকঘরের নাম লিখুন"}
//             // setValue={setStudentName}
//           />
//           <InputField
//             title="থানা"
//             type={"text"}
//             placeholder={"আপনার ছাত্রের থানার নাম লিখুন"}
//             // setValue={setStudentName}
//           />
//           <InputField
//             title="জেলা"
//             type={"text"}
//             placeholder={"আপনার ছাত্রের জেলার নাম লিখুন"}
//             // setValue={setStudentName}
//           />
//         </div>
//         <h2 className="text-[20px] font-semibold my-[20px]">বর্তমান ঠিকানা</h2>
//         {/* === father info  === */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:mb-[20px]">
//           <InputField
//             title="গ্রাম"
//             type={"text"}
//             placeholder={"আপনার ছাত্রের গ্রামের নাম লিখুন"}
//             // setValue={setStudentName}
//           />
//           <InputField
//             title="ডাকঘর"
//             type={"text"}
//             placeholder={"আপনার ছাত্রের ডাকঘরের নাম লিখুন"}
//             // setValue={setStudentName}
//           />
//           <InputField
//             title="থানা"
//             type={"text"}
//             placeholder={"আপনার ছাত্রের থানার নাম লিখুন"}
//             // setValue={setStudentName}
//           />
//           <InputField
//             title="জেলা"
//             type={"text"}
//             placeholder={"আপনার ছাত্রের জেলার নাম লিখুন"}
//             // setValue={setStudentName}
//           />
//         </div>
//       </div>

//       {/* ==== Submit button ==== */}
//       <div className="flex gap-[20px] justify-end mt-[30px] mb-[15px]">
//         <button
//           onClick={() => setCurrentPage("about")}
//           className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[8px] rounded-[8px]"
//         >
//           <GrLinkPrevious />
//           Back
//         </button>
//         <button
//           onClick={() => setCurrentPage("learningStatus")}
//           className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[8px] rounded-[8px]"
//         >
//           Next
//           <GrLinkNext />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Address;

import React from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import InputField from "../../InputField/InputField";

const Address = () => {
  return (
    <div className="bg-white border shadow-sm rounded-[5px] mb-[30px]">
      <div className="bg-[#e9edf4] px-[20px] py-[16px] rounded-t-[5px] flex items-center gap-[10px]">
        <div className="bg-white p-[5px] rounded-[5px]">
          <IoMdInformationCircleOutline className="text-[#202C4B] text-[14px]" />
        </div>
        <h2 className="text-[#202C4B] font-semibold text-[18px]">Address</h2>
      </div>
      {/*  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] p-[20px]">
        <InputField title={"Current Address"} />
        <InputField title={"Permanent Address"} />
      </div>
    </div>
  );
};

export default Address;
