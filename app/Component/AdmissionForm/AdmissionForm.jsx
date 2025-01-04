import React, { useState } from "react";
import About from "./About/About";
import Address from "./Address/Address";

const AdmissionForm = () => {
  const [currentPage, setCurrentPage] = useState("about");
  return (
    <div className="px-[20px] py-[10px] bg-white mt-[40px] mb-[50px] rounded-t-[20px] border-t-[2px] border-[#008000]">
      {currentPage === "about" ? (
        <About />
      ) : currentPage === "address" ? (
        <Address />
      ) : (
        <h2>page nai</h2>
      )}
    </div>
  );
};

export default AdmissionForm;
