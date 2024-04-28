import React from "react";
import { NavLink } from "react-router-dom";
import img from "../images/logo.png"
import Navbar from "./Navbar";
import {styled} from "styled-components"

   
   const Header=()=>
{
  const MainHeader=styled.header`
   
    padding:0 4.8rem;
    height:10rem;
    background-color:${({theme})=> theme.colors.bg};
    display:flex;
    justify-content:space-between;
    align-items:center;

    .logo{
      height:auto;
      max-width:30%;
    }
    
   `
   return <>
    <MainHeader>
        <NavLink to="/">
          <img src={img} alt="logo" className="logo"/>
        </NavLink>
        <Navbar/>
    </MainHeader>
   </>
  
}
export default Header