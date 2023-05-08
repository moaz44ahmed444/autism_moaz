import React , { useState }from "react";

import { NavbarSection,Logo,LogoText,UlList,ListItem,Anchor, LinkItem } from "./Style.js"
const Navbar = () => {

  const [signedIn, setSignedIn] = useState(true);

  return (
    <NavbarSection>
            
    <div className="container">
        
        <Logo>
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
