import React, { useEffect, useState } from "react";

import { NavbarSection,Logo,LogoText,UlList,ListItem,Anchor, LinkItem, LogoImg } from "./Style.js"
import { NavLink } from "react-router-dom";
const Navbar = () => {

  const [auth , setAuth] = useState(null) ; 

  // For Access LocalStorage 
  const getAuther = ()=>{
    if(localStorage.getItem("user"))
      {
        setAuth(JSON.parse(localStorage.getItem("user")))
       
      }
  }

useEffect(()=>{
  getAuther()
} ,[])
  
    // For Logout 
    const logoutHandler = ()=>{
        localStorage.removeItem("user" ) ; 
        window.location.replace("http://localhost:3000/Login")
    }

  return (
    <NavbarSection>
            
    <div className="container">
        
        <Logo>
        <LogoImg src="https://i.pinimg.com/564x/20/04/0d/20040d115d0bcc53a9f15cea8e3d4744.jpg" alt="react"/>
          <LogoText>Autism</LogoText>
        </Logo>
        
       
        
        <UlList>
            <ListItem><LinkItem to="/">Home</LinkItem></ListItem>
            <ListItem><LinkItem to="/Questionnaire">Questionnaire</LinkItem></ListItem>
            <ListItem><LinkItem to="/Treatments">Treatments</LinkItem></ListItem>
            <ListItem><Anchor >About</Anchor></ListItem>
            <ListItem><LinkItem to="/Contact">Contact</LinkItem></ListItem>
            
          {
            !auth && (
              <ListItem><LinkItem to="/Login">Login</LinkItem></ListItem>
 
            )
          }
          {
            auth &&  (
              <>
              <ListItem><LinkItem to="/MyAccount">My Account</LinkItem></ListItem>
              <ListItem><Anchor to="/login" onClick={logoutHandler} >Logout</Anchor></ListItem>
              </>

            )
          }

        </UlList>
        
    </div>
    
</NavbarSection>
  );
}

export default Navbar;
