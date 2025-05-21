import React, { Suspense } from "react";
import Navbar from "../components/Navbar";
// import HeroSection from "../components/HeroSection";
import StaffCard from "../components/StaffCard";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Percentage from "../components/Percentage";
import Loading from "../components/Loading";

const HeroSection = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("../components/HeroSection"));
      }, 5000);
    })
);


const Homepage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Suspense fallback={<Loading />}>
        <HeroSection />
      </Suspense>
      
      <Percentage/>
      <Cart/>
      <div className="flex">
      <StaffCard
      name="John"
      position="Manager"
      department="Hr"
      image="https://randomuser.me/api/portraits/women/44.jpg"/>

<StaffCard
      name="Sarah"
      position="Staff"
      department="Hr"
      image="https://randomuser.me/api/portraits/men/22.jpg"/>

<StaffCard
      name="Steve"
      position="Boss"
      department="Hr"
      image="https://randomuser.me/api/portraits/men/32.jpg"/>
      </div>

     <Footer/>
    </div>
  );
};

export default Homepage;
