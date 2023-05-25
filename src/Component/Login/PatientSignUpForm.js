
import React, { useState } from "react";
import axios from 'axios';
import { Container , Form , Input , Button  , DropdownContainer , DropdownButton ,  FileInput , FileInputLabel , FormGroup , ImagePreview  , TriangleRight } from './Style.js'
import { Link } from "react-router-dom";

  const PatientSignUpForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDob] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const [imagePreview, setImagePreview] = useState('');
  
    const handleSignUp = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:8000/api/signup/', {
        type: 'patient',
        firstName,
        lastName,
        email,
        username,
        password,
        dob,
        phoneNumber,
        profileImage,
      });
      console.log(response.data);
      window.location.replace("http://localhost:3000/Login");
    } catch (error) {
      console.error(error);
    }
  };

  
  const handleProfileImagePreview = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview('');
    }
    setProfileImage(file);
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
        <Input type="date" placeholder="Date of Birth" value={dob} onChange={e => setDob(e.target.value)} />
        <Input type="tel" placeholder="Phone Number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
        <FormGroup>
          <FileInputLabel htmlFor="profile-image">Choose Profile Image</FileInputLabel>
          <FileInput id="profile-image" placeholder="Profile Image" type="file" onChange={handleProfileImagePreview} />
          {imagePreview && <ImagePreview src={imagePreview} alt="Profile" />}
        </FormGroup>
        <div>
        <Button type="submit">Sign Up</Button>
        <Link to={{pathname: "/Login" }} >
            <DropdownContainer><DropdownButton>Alredy have an account</DropdownButton></DropdownContainer>
        </Link>
        </div>
      </Form>
      </Container>
    </>

    );
  };
  


  export default PatientSignUpForm;