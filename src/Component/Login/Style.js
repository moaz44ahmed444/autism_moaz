import styled from "styled-components";


export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 150vh;
	background-image: url("https://www.spectrumnews.org/wp-content/uploads/2015/11/20151201WhatIsAutism-844-2.jpg");
	background-size: cover;
    background-attachment: fixed

`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #fff;
	padding: 30px;
	border-radius: 10px;
	box-shadow: 0px 0px  rgba(0, 0, 0, 0.1);
	width: 400px;
`;

export const Title = styled.h1`
	font-size: 36px;
	margin-bottom: 30px;
	text-align: center;
	color: #000;
`;

export const Input = styled.input`
	padding: 10px;
	border-radius: 5px;
	border: none;
	margin-bottom: 20px;
	width: 100%;
	font-size: 16px;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);

`;

export const Button = styled.button`
	padding: 10px;
	border-radius: 5px;
	border: none;
	background-color: #1e90ff;
	color: #fff;
	cursor: pointer;
	transition: background-color 0.2s ease-in-out;
	width: 100%;
	font-size: 16px;

	&:hover {
	background-color: #00bfff;
	}
`;

export const SwitchMode = styled.p`
	font-size: 14px;
	margin-bottom: 0;
	color: #000;
`;

export const SwitchModeButton = styled.button`
	font-size: 14px;
	margin-left: 5px;
	color: #0077cc;
	background-color: transparent;
	border: none;
	cursor: pointer;
	transition: color 0.2s ease-in-out;

	&:hover {
	color: #00bfff;
	}
`;

export const SignUpText = styled.p`
	font-size: 14px;
	margin-top: 20px;
`;

export const DropdownContainer = styled.div`
  position: relative;
  margin-bottom: 0%;
`;

export const DropdownButton = styled.button`
	padding: 10px;
	border-radius: 5px;
	border: none;
	background-color: #1e90ff;
	color: #fff;
	cursor: pointer;
	transition: background-color 0.2s ease-in-out;
	width: 90%;
	font-size: 16px;
	margin-left: 5%;
	margin-right: 5%;
	align-items: center;
	
	&:hover {
	background-color: #00bfff;
	}
	`;

export const DropdownContent = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  z-index: 1;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
`;

export const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #ddd;
  }
`;

export const DrowDIV = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #fff;
	padding: 30px;
	border-radius: 10px;
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
	width: 400px;
	padding-top: 10px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
  text-align: left;
`;