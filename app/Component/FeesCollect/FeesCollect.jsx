import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import user from "../../../public/sadiq.jpg";
import { GoDotFill } from "react-icons/go";

const FeesCollect = ({ setFeesCollectOpen }) => {
  return (
    <div className="fixed inset-0 z-[70] flex justify-center overflow-x-auto py-[50px]  bg-black bg-opacity-50">
      <div className="bg-white  rounded-lg shadow-lg w-96 relative lg:w-[800px]">
        <div className="flex items-center justify-between border-b p-[15px]">
          <div className="flex items-center gap-[10px]">
            <h2 className="text-[20px] text-[#202C4B] font-bold">
              Collect Fees
            </h2>
            <h2 className="text-[14px] text-white bg-[#3D5EE1] rounded-[5px] py-[2px] px-[10px] font-semibold">
              Ad12345
            </h2>
          </div>
          <button onClick={() => setFeesCollectOpen(false)}>
            <IoIosCloseCircle className="text-[#838A9B] text-[23px] hover:text-red-500" />
          </button>
        </div>

        {/*  */}
        <div className="flex items-center justify-between bg-[#f2f5ffa9] mx-[20px] p-[20px] rounded-[5px] my-[20px]">
          <div className="flex items-center gap-[10px]">
            <div className="w-[50px] h-[50px] rounded-[5px]">
              <img className="rounded-[5px]" src={user} alt="user jpg" />
            </div>
            <div>
              <h2 className="text-[#202C4B] font-semibold">Sadiqur Rahman</h2>
              <p className="text-[#202C4B] text-[14px]">One , A</p>
            </div>
          </div>

          <div>
            <h2 className="text-[#202C4B] font-semibold">Total Outstanding</h2>
            <p className="text-[#202C4B] text-[14px]">1000</p>
          </div>

          <button className="flex items-center bg-red-100 text-[14px] text-red-500 font-semibold py-[2px] px-[6px] rounded-[5px]">
            <GoDotFill />
            <p>Unpaid</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeesCollect;
