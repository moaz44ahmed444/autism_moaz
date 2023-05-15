
import React, { useState } from "react";
import axios from 'axios';
import { Container , Form ,  Title , Input , Button , SwitchMode , SwitchModeButton , SignUpText , DropdownContainer , DropdownButton , DropdownContent , DropdownItem , DrowDIV , Label , TriangleRight } from './Style.js'
import { Link } from "react-router-dom";
import Footer from "../Footer/index.js";

  const SpecialistSignUpForm = () => {
    const [signedIn, setSignedIn] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [dob, setDob] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const [cv, setCv] = useState('');
  
    const handleSignUp = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:8000/api/signup/', {
        type: 'specialist',
        firstName,
        lastName,
        email,
        username,
        password,
        specialty,
        dob,
        phoneNumber,
        profileImage,
        cv,
      });
      console.log(response.data);
      setSignedIn(true);
    } catch (error) {
      console.error(error);
    }
  };

    return (
        <>
        <Container>
        <TriangleRight></TriangleRight>
        <Form onSubmit={handleSignUp}>

        <Input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
        <Input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
        <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <Input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <Input type="text" placeholder="Specialty" value={specialty} onChange={e => setSpecialty(e.target.value)} />
        <Input type="date" placeholder="Date of Birth" value={dob} onChange={e => setDob(e.target.value)} />
        <Input type="tel" placeholder="Phone Number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
        <Label>Choose Profile Image</Label>
        <Input type="file" placeholder="Profile Image" onChange={e => setProfileImage(e.target.files[0])} />
        <Label>Choose CV</Label>
        <Input type="file" placeholder="CV" onChange={e => setCv(e.target.files[0])} />
        <div>
        <Button type="submit">Sign Up</Button>
        <Link to={{pathname: "/Login" }} >
            <DropdownContainer><DropdownButton>Alredy have an account</DropdownButton></DropdownContainer>
        </Link>
        </div>
        </Form>
      </Container>
          <Footer />
    </>

    );
  };

  export default SpecialistSignUpForm;