import styled from "styled-components";

export const Body = styled.div`
min-height: 100%;
padding: 0;
margin: 0;
outline: none;
font-family: Roboto, Arial, sans-serif;
font-size: 14px;
color: #666;
line-height: 22px;
`

export const Textbox  = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: inherit;
padding: 20px;
`
export const Form = styled.form`
width: 100%;
padding: 20px;
border-radius: 6px;
background: #fff;
box-shadow: 0 0 8px  #669999; 
margin: 0;
outline: none;
font-family: Roboto, Arial, sans-serif;
font-size: 14px;
color: #666;
line-height: 22px;
`
export const Banner  = styled.div`
position: relative;
height: 300px;
background-image: url("https://mind.help/wp-content/uploads/2022/10/AUTISM-test-site.jpg");  
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
&:after {
content: "";
background-color: rgba(0, 0, 0, 0.2); 
position: absolute;
width: 100%;
height: 100%;
}
`

export const Input  = styled.input`
width: calc(100% - 10px);
padding: 5px;
margin-bottom: 10px;
border: 1px solid #ccc;
border-radius: 3px;
margin: 0;
outline: none;
font-family: Roboto, Arial, sans-serif;
font-size: 14px;
color: #666;
line-height: 22px;
&:hover::placeholder{
    color:  #669999;
}
`

/*.item:hover p, .item:hover i, .question:hover p, .question label:hover, input:hover::placeholder {
color:  #669999;
}*/




/*input[type=radio], input[type=checkbox]  {
display: none;
} */
export const InputRadio  = styled(Input)`
display: none;
&:checked + label:before  {
    border: 2px solid  #669999;
}
&:checked + label:after {
    opacity: 1;
}
`
export const QuestionAnswerLabel  = styled.label`
display: block;
padding: 0;
margin: 0;
outline: none;
font-family: Roboto, Arial, sans-serif;
font-size: 14px;
color: #666;
line-height: 22px;

&:hover{
    color:  #669999;
}

`

export const LabelRadio  = styled(QuestionAnswerLabel)`
position: relative;
display: inline-block;
margin: 5px 20px 15px 0;
cursor: pointer;

&:before {
    content: "";
    position: absolute;
    left: 0;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    border: 2px solid #ccc;
}
&:hover:before{
    border: 2px solid  #669999;
}
&:after {
    content: "";
    position: absolute;
    top: 6px;
    left: 5px;
    width: 8px;
    height: 4px;
    border: 3px solid  #669999;
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);
    opacity: 0;
  };
`

export const Span  = styled.span`
    margin-left: 10px;
    position: relative;
    display: inline-block;
    cursor: pointer;
    
    &:hover{
        color:  #669999;
      }
    &:hover:before{
        border: 2px solid  #669999;
    }
    &:after {
        content: "";
        position: absolute;
        top: 6px;
        left: 5px;
        width: 8px;
        height: 4px;
        border: 3px solid  #669999;
        border-top: none;
        border-right: none;
        transform: rotate(-45deg);
        opacity: 0;
    };
    
`

export const BtnBlock  = styled.div`
margin-top: 10px;
text-align: center;
`
export const Button  = styled.button`
width: 150px;
padding: 10px;
border: none;
border-radius: 5px; 
background:  #669999;
font-size: 16px;
color: #fff;
cursor: pointer;
&:hover{
    background:  #a3c2c2;
}
`

 export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: lft;
  margin-top: 0px;
`;

export const Question = styled.h2`
  font-size: 22px;
  margin-bottom: 10px;
  &:hover{
    color:  #669999;
  }
`;

export const AnswerOption = styled.label`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const RadioInput = styled.input`
  margin-right: 10px;
  display: block;
  padding: 0;
  margin: 0;
  outline: none;
  font-family: Roboto, Arial, sans-serif;
  font-size: 14px;
  color: #666;
  line-height: 22px;
  content: "";
}
&:hover{
    color:  #669999;
    border: 2px solid  #669999;
}
`;

