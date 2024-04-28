import React from "react";
import HeroSection from "./components/HeroSection";
import imgAbout from "./images/about.jpeg"
const About=()=>
{ 
    
    return <>
        <HeroSection 
          description="we are dedicated to providing cutting-edge technology solutions tailored to meet the unique needs of our clients."
          img={imgAbout}
        />
    </>
}
export default About