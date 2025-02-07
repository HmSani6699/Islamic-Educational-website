import React from "react";
import Hero from "./HeroSection/Hero";
import HomeNavbar from "../../Navber/HomeNavbar/HomeNavbar";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Hero />

      <Banner />
    </div>
  );
};

export default Home;
