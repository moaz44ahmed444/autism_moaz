import React from "react";

import { NavbarSection,Logo,LogoText,UlList,ListItem,Anchor, LinkItem, LogoImg } from "./Style.js"
const Navbar = (props) => {

  const { signedIn } = props;

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
            <ListItem><LinkItem to="/contact">Contact</LinkItem></ListItem>
            {signedIn ? (
            <>
              <ListItem><LinkItem to="/MyAccount">My Account</LinkItem></ListItem>
            </>
          ) : (
            <>
              <ListItem><LinkItem to="/Login">Login</LinkItem></ListItem>
              </>
          )}

        </UlList>
        
    </div>
    
</NavbarSection>
  );
}

export default Navbar;
