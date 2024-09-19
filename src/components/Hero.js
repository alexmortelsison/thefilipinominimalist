import React from "react";
import caldereta from "../assets/caldereta.png";
import "animate.css";

const Hero = () => {
  const heroStyle1 = {
    backgroundImage: `url(${caldereta})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "75vh",
    width: "50%",
  };
  const heroStyle2 = {
    backgroundImage: `url(${caldereta})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    height: "40vh",
    width: "100%",
  };

  return (
    <div className="flex mt-12 items-center justify-center lg:items-center">
      <div
        style={heroStyle1}
        className="hidden lg:flex rounded-r-3xl lg:rounded-r-full mt-10 border-10 border-l-0 border-orange-700"
      ></div>
      <div>
        <h1
          style={{ animationDuration: "2s" }}
          className="font-rochester text-5xl lg:text-9xl text-center lg:animate__animated animate__fadeInRight"
        >
          "Celebrating Filipino flavors, one recipe at a time!"
        </h1>
        <div className="flex items-center justify-center mx-8">
          <img
            src={caldereta}
            className="rounded-full mt-10 border-10 border-orange-700 lg:hidden w-96"
          ></img>
        </div>
        <div className="mt-12 flex items-center justify-center">
          <button className="bg-orange-700 px-6 py-2 rounded-full hover:bg-orange-500 duration-200 text-white lg:text-2xl lg:px-12 lg:py-8">
            See All Recipes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
