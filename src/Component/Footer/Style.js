import styled from "styled-components";

export const FooterSection =styled.div` 
text-align: center;
background-color:#fcf7f1;
width: 100%;

`
export const Logo =styled.img`

border-radius:200px;
width:60px;
margin:20px;
margin-top:60px;
`
export const FooterTitle =styled.div` 
margin-top:5%;
font-size:40px;
color:black
`
export const FooterDesc =styled.div` 
bottom:0px;
width: 100%;
background-color:rgba(0, 0, 0, 0.5);
color:white;
margin-top:2%;
padding:30px;
`
export const Icon =styled.i`
margin-top:4%;
margin-right:25px;
font-size:28px;
background-color:#edb39ba8;
padding:10px;
border-radius: 20px;
color:white;
&:hover {
    background-color:#85d5a5;
    color: white;
    }
`
export const ProfileList = styled.ul`
    list-style: none;
    margin-top:50px;
`

export const ProfileItem= styled.li`
    margin-bottom: 8px;
    margin-right:100px;
    color:rgba(0, 0, 0, 0.5);;
`

export const ProfileItemSpan= styled.div`
    display: inline-block;
    width: 100px;
    font-weight: bold;
    color:black;
`