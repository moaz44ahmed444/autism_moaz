import { Link } from "react-router-dom";
import styled from "styled-components";


export const NavbarSection = styled.div`
    padding: 20px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000
`
export const Logo = styled.div`
    width: 50%;
    float: left;
   display:flex;
`
export const LogoImg =styled.img`

border-radius:200px;
width:80px;
height:45px;
margin-top:5%;
`

export const LogoText = styled.h2`
    font-size: 30px;
    font-weight: bold
`

export const UlList = styled.ul`
    width: 50%;
    float: left;
    list-style: none;
    padding: 0%;
`

export const ListItem = styled.li`
    display: inline-block;
`

export const Anchor = styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        color: #eb5424

    }
`

export const LinkItem = styled(Link)`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    cursor: pointer;
    
    &:hover {
        color: #eb5424

    }
`
