import React, { useState } from "react";
import Contact from "./Component/Contact"
import Index from "./Component/Index";
import Navbar from "./Component/Navbar";
import Login from "./Component/Login";
import MyAccount from "./Component/MyAccount";
import EditSpecilaistProfile from "./Component/MyAccount/EditProfile/EditSpecialistProfile"
import EditParentProfile from "./Component/MyAccount/EditProfile/EditParentProfile"
import EditPatientProfile from "./Component/MyAccount/EditProfile/EditPatientProfile"
import Questionnaire from "./Component/Questionnaire";
import Treatments from "./Component/Treatments";
import Game from "./Component/Treatments/Game"
import SpecialistSignUpForm from "./Component/Login/SpecialistSignUpForm";
import ParentSignUpForm from "./Component/Login/ParentSignUpForm";
import PatientSignUpForm from "./Component/Login/PatientSignUpForm";
import SpecialistAppointments from "./Component/MyAccount/AppointmentsHandling/SpecialistAppointments";
import ParentAppointments from "./Component/MyAccount/AppointmentsHandling/ParentAppointments";
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Footer from "./Component/Footer";



const App = () => {

  const userId = '123'; // This could be the user's ID from the login page
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Index/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/Questionnaire' element={<Questionnaire/>} />
        <Route path='/Login' element={<Login />} />
        <Route path='/SpecialistSignUpForm' element={<SpecialistSignUpForm />} />
        <Route path='/ParentSignUpForm' element={<ParentSignUpForm />} />
        <Route path='/PatientSignUpForm' element={<PatientSignUpForm />} />
        <Route path='/MyAccount' element={<MyAccount userId={userId}/>} />
        <Route path='/EditSpecilaistProfile' element={<EditSpecilaistProfile/>} />
        <Route path='/EditParentProfile' element={<EditParentProfile/>} />
        <Route path='/EditPatientProfile' element={<EditPatientProfile/>} />
        <Route path='/SpecialistAppointments' element={<SpecialistAppointments/>} />
        <Route path='/ParentAppointments' element={<ParentAppointments/>} />
        <Route path='/Treatments' element={<Treatments/>} />
        <Route path='/Game1' element={<Game index={1}/>} />
        <Route path='/Game2' element={<Game index={2}/>} />
        <Route path='/Game3' element={<Game index={3}/>} />
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;