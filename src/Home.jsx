import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./Services";
import About from "./About"
import Contact from "./Contact"
import imgHome from "./images/home.jpeg"
const Home=()=>
{
    return <>
       <HeroSection
        description="Empowering Your Digital Future: Welcome to zipTech Solutions,where innovation meets reliability for all your tech needs"
        img={imgHome}
        />
        <Services/>
        <About/>
        <Contact/>

    </>
}
export default Home