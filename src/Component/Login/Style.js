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


//a{color:inherit;text-decoration:none}

/*
.login-wrap{
    margin:0;
	color:#6a6f8c;
	background:#c8c8c8;
	font:600 16px/18px 'Open Sans',sans-serif;
	width:100%;
	margin:auto;
	max-width:525px;
	min-height:670px;
	position:relative;
	background:url(https://raw.githubusercontent.com/khadkamhn/day-01-login-form/master/img/bg.jpg) no-repeat center;
	box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19);
}
.login-html{
	width:100%;
	height:100%;
	position:absolute;
	padding:90px 70px 50px 70px;
	background:rgba(40,57,101,.9);
	box-sizing:border-box;
}
.login-html .sign-in-htm,
.login-html .sign-up-htm{
	top:0;
	left:0;
	right:0;
	bottom:0;
	position:absolute;
	transform:rotateY(180deg);
	backface-visibility:hidden;
	transition:all .4s linear;
}
.login-html .sign-in,
.login-html .sign-up,
.login-form .group .check{
	display:none;
}
.login-html .tab,
.login-form .group .label,
.login-form .group .button{
	text-transform:uppercase;
}
.login-html .tab{
	font-size:22px;
	margin-right:15px;
	padding-bottom:5px;
	margin:0 15px 10px 0;
	display:inline-block;
	border-bottom:2px solid transparent;
}
.login-html .sign-in:checked + .tab,
.login-html .sign-up:checked + .tab{
	color:#fff;
	border-color:#1161ee;
}
.login-form{
	min-height:345px;
	position:relative;
	perspective:1000px;
	transform-style:preserve-3d;
}
.login-form .group{
	margin-bottom:15px;
}
.login-form .group .label,
.login-form .group .input,
.login-form .group .button{
	width:100%;
	color:#fff;
	display:block;
}
.login-form .group .input,
.login-form .group .button{
	border:none;
	padding:15px 20px;
	border-radius:25px;
	background:rgba(255,255,255,.1);
}
.login-form .group input[data-type="password"]{
	-webkit-text-security:circle;
}
.login-form .group .label{
	color:#aaa;
	font-size:12px;
}
.login-form .group .button{
	background:#1161ee;
}
.login-form .group label .icon{
	width:15px;
	height:15px;
	border-radius:2px;
	position:relative;
	display:inline-block;
	background:rgba(255,255,255,.1);
}
.login-form .group label .icon:before,
.login-form .group label .icon:after{
	content:'';
	width:10px;
	height:2px;
	background:#fff;
	position:absolute;
	transition:all .2s ease-in-out 0s;
}
.login-form .group label .icon:before{
	left:3px;
	width:5px;
	bottom:6px;
	transform:scale(0) rotate(0);
}
.login-form .group label .icon:after{
	top:6px;
	right:0;
	transform:scale(0) rotate(0);
}
.login-form .group .check:checked + label{
	color:#fff;
}
.login-form .group .check:checked + label .icon{
	background:#1161ee;
}
.login-form .group .check:checked + label .icon:before{
	transform:scale(1) rotate(45deg);
}
.login-form .group .check:checked + label .icon:after{
	transform:scale(1) rotate(-45deg);
}
.login-html .sign-in:checked + .tab + .sign-up + .tab + .login-form .sign-in-htm{
	transform:rotate(0);
}
.login-html .sign-up:checked + .tab + .login-form .sign-up-htm{
	transform:rotate(0);
}

.hr{
	height:2px;
	margin:60px 0 50px 0;
	background:rgba(255,255,255,.2);
}
.foot-lnk{
	text-align:center;
}
*/