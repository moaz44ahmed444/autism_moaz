import React from "react";
import { FooterDesc,FooterSection,FooterTitle,Icon,Logo,ProfileList,ProfileItem,ProfileItemSpan } from "./Style";
const Footer =()=>{
    return( 
    <div>  
    <FooterSection>
        <FooterTitle><Logo src="https://i.pinimg.com/564x/20/04/0d/20040d115d0bcc53a9f15cea8e3d4744.jpg" alt="react"></Logo><br/>Autism Awareness</FooterTitle>
        <ProfileList>
        <ProfileItem >
         <ProfileItemSpan>Phone</ProfileItemSpan>
         : 123-456-7890
        </ProfileItem>
        <ProfileItem >
     <ProfileItemSpan>Fax</ProfileItemSpan>
     : 123.456.7890
 </ProfileItem>
        </ProfileList>
        <div>
        <Icon className= "icon fa fa-facebook fa-lg"></Icon>
        <Icon className= "icon fa fa-pinterest fa-lg"></Icon>
        <Icon className= "icon fa fa-twitter fa-lg"></Icon>
        
        </div>
        <FooterDesc>© 2023 - Autism All Right Reserved <br/>
        
         </FooterDesc>
    </FooterSection>
    </div>
    )
}
export default Footer ;