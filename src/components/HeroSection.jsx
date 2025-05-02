import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { FaArrowRightLong, FaAsterisk, FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube } from "react-icons/fa6";
import { MdLanguage } from "react-icons/md";

const HeroSection = () => {
  const [isSubcribed, setIsSubcribed] =useState(false);
  const Subcribe = () => {
    setIsSubcribed(true);
  };
  return (
    <section className="h-full flex flex-col justify-center items-center px-4">
      <div className="text-center space-y-7">
        <p className="lg:text-[#717171] text-red-400 text-capitalize text-[14px]">
          ALL-IN-ONE MARKETING SOFTWAR
        </p>
        <h1 className="lg:text-[62px] text-[40px] font-bold leading-tight">
          Send emails, automate marketing, monetize content – in one place
        </h1>
        <p className="text-[18px] lg:text-black text-green-400">
          Grow your business and boost revenue with an easy, affordable platform
          that brings email,
          <br /> automation, online courses and paid newsletters togethers.
        </p>

        <button 
          onClick={Subcribe}
        className="bg-[#fbe30c]  px-8 py-4 rounded-3xl font-bold w-fit">
           {isSubcribed ? "you are now subscribed" : "Start 30-day FREE trial"}
        </button>
        <p>Try us free | No credit card required | Cancel anytime</p>
      </div>
      

      
      
    </section>
  );
};

export default HeroSection;
