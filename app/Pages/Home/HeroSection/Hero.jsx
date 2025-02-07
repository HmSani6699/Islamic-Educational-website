import React from "react";
import logo from "../../../../public/heroLogo.png";

const Hero = () => {
  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="flex gap-[50px] items-center justify-center bg-[#2e3192] pt-[20px]  pb-[50px]">
        {/* =====> Top section <==== */}
        <div>
          <h2 className="text-[25px] font-bold text-white font-mono ">
            পাকুন্ডা ইসলামিয়া হাফেজিয়া মাদ্রাসা
          </h2>
          <p className="text-[18px] text-white text-center mt-[10px] font-mono ">
            বালিয়াপাড়া,সোনারগাঁ, নারায়ণগঞ্জ
          </p>
        </div>
        {/* =====> Middle section <==== */}
        <div className="w-[150px] rounded-full h-[150px] overflow-hidden bg-white">
          {/* <img className="w-full h-full " src={logo} alt="" /> */}
        </div>
        {/* =====> Bottom section <==== */}
        <div>
          <h2 className="text-[33px] font-bold text-white  ">
            Pakunda Islamia Hafezia Madrasa
          </h2>
          <p className="text-[18px] text-white text-center mt-[10px]">
            Baliapara, Sonargaon, Narayanganj
          </p>
        </div>
      </div>
      <h2></h2>
    </div>
  );
};

export default Hero;
