import React from "react";
import logo1 from "../../../assets/partners/1.png";
import logo2 from "../../../assets/partners/2.png";
import logo3 from "../../../assets/partners/3.png";
import logo4 from "../../../assets/partners/4.png";

const partners = () => {
  return (
    <div id="partners" className="bg-gray-100 py-12 ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-serif sm:text-3xl text-3xl font-bold title-font text-gray-600 text-center tracking-wide">
          Партнеры
        </h1>
        <span className="block h-1 w-12 rounded bg-primary-500 mt-8 mb-6"></span>
      </div>
      {/*List of partners*/}
      <div className="lg:container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 mt-12 sm:my-16 sm:divide-y-0 sm:divide-x divide-gray-300 sm:gap-8 px-10 divide-opacity-80">
          <div className="flex justify-center items-center p-4 sm:p-0 ">
            <img src={logo1} alt="logo one" />
          </div>
          <div className="flex justify-center items-center p-4 sm:p-0 sm:pl-7 border-l border-gray-100 sm:border-0 ">
            <img src={logo2} alt="logo two" />
          </div>
          <div className="flex justify-center items-center p-4 sm:p-0 sm:pl-7 border-t border-gray-100 sm:border-0 ">
            <img src={logo3} alt="logo three" />
          </div>
          <div className="flex justify-center items-center p-4 sm:p-0 border-l border-t border-gray-100 sm:border-0 sm:pt-0 sm:pl-4">
            <img src={logo4} alt="logo four" />
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default partners;
