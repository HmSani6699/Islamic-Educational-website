import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { GrLinkPrevious } from "react-icons/gr";

const StudentPhoto = ({ setCurrentPage }) => {
  return (
    <div className="px-[20px] py-[30px] bg-white mt-[20px] mb-[50px] ">
      {/* ===> Image div <=== */}
      <div className="flex items-center justify-center my-[20px]">
        <div className="cursor-pointer h-[300px] w-[300px] border-[3.5px] border-dotted rounded-[15px] border-gray-300 bg-white flex flex-col items-center justify-center hover:border-[#008000] hover:shadow-md transition duration-200 ease-in-out">
          <label
            htmlFor="student_image"
            className="w-full h-full flex flex-col items-center justify-center"
          >
            <FaCloudUploadAlt className="text-gray-500 text-[70px] mb-2" />
            <h2 className="text-gray-600 text-sm font-semibold">Upload File</h2>
            <input className="hidden" type="file" id="student_image" />
          </label>
        </div>
      </div>

      {/* ==== Submit button ==== */}
      <div className="flex gap-[20px] justify-end mt-[50px] ">
        <button
          onClick={() => setCurrentPage("feeDetails")}
          className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[8px] rounded-[8px]"
        >
          <GrLinkPrevious />
          Back
        </button>
        <button
          onClick={() => setCurrentPage("form_success")}
          className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[8px] rounded-[8px]"
        >
          submit
        </button>
      </div>
    </div>
  );
};

export default StudentPhoto;

//  <label for="product_image" class="flex flex-col items-center justify-center border-4 border-gray-300 border-dashed rounded h-36 px-6 text-lg text-gray-600 focus:outline-none focus:ring focus:border-blue-300 cursor-pointer"" autocomplete="off">

//             <span class="mt-2 text-base leading-normal text-blue-500 font-bold">Selecciona un archivo</span>
//             <input type="file" id="product_image" class="hidden"/>
//        </label>
