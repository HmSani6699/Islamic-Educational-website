import React from "react";
import logo from "../../../../public/man.png";
import HomeNavbar from "../../../Navber/HomeNavbar/HomeNavbar";

const Hero = () => {
  return (
    <div className="max-w-[1300px] mx-auto bg-[#2e3192] h-[250px]">
      <div className="flex gap-[50px] items-center justify-center pt-[30px]  pb-[30px]">
        {/* =====> Top section <==== */}
        <div>
          <h2 className="text-[25px] font-bold text-white ">
            পাকুন্ডা ইসলামিয়া হাফেজিয়া মাদ্রাসা
          </h2>
          <p className="text-[18px] text-white text-center mt-[10px]  ">
            বালিয়াপাড়া,সোনারগাঁ, নারায়ণগঞ্জ
          </p>
        </div>
        {/* =====> Middle section <==== */}
        <div className="w-[150px] rounded-full h-[150px] overflow-hidden bg-white">
          <img className="w-full h-full " src={logo} alt="" />
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
      <HomeNavbar />
    </div>
  );
};

export default Hero;
