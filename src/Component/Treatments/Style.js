import styled from "styled-components";

export const WorkSection = styled.div `
    height: auto;
    padding: 50px 0;
    overflow: hidden;
    background: #fff;
`

export const WorkTitle = styled.h2 `
    font-size: 50px; 
    text-align: center;
`

export const Span = styled.span `
    font-weight: normal
`

export const WorkPart = styled.div `
    margin-top: 20px;
    width: 100%;
    float: left;
    height: auto;
    padding: 60px 0;
    border: 1px solid #888;
    box-sizing: border-box;
    text-align: center;
    margin-left: 1%;

`

export const GamePhoto = styled.img `
    width: 100%;
    height:300px;

`
export const ImageWrapper = styled.div`
    width: 50%;
    left: 25%;
    font-size: 0;
    position: relative;
    
    &:hover > div {
        opacity : 1;
        
    }
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(235,84,36 , 0.5);
    font-size: 15px;
    opacity: 0
`

export const OverlaySpan = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    display: block;
    padding: 10px 20px;
    cursor: pointer;
    border: 2px solid #eb5424;
`

export const PartTitle = styled.h4 `
    font-size: 25px;
    color: #eb5424;
    margin-bottom: 20px
`

export const PartLine = styled.hr `
    width: 60%;
    margin: auto;
    margin-bottom: 20px
`

export const PartDesc = styled.p `
    font-size: 14px;
    color: #888;
    padding: 20px
`
