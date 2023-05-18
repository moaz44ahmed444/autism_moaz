import React, { useState } from "react";
import Contact from "./Component/Contact"
import Index from "./Component/Index";
import Navbar from "./Component/Navbar";
import Login from "./Component/Login";
import MyAccount from "./Component/MyAccount";
import EditProfile from "./Component/MyAccount/EditProfile"
import Questionnaire from "./Component/Questionnaire";
import Treatments from "./Component/Treatments";
import Game from "./Component/Treatments/Game"
import SpecialistSignUpForm from "./Component/Login/SpecialistSignUpForm";
import ParentSignUpForm from "./Component/Login/ParentSignUpForm";
import PatientSignUpForm from "./Component/Login/PatientSignUpForm";
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Footer from "./Component/Footer";



const App = () => {
  const [signedIn, setSignedIn] = useState(true);

  const userId = '123'; // This could be the user's ID from the login page
  return (
    <BrowserRouter>
      <Navbar signedIn={signedIn} />
      <Routes>
        <Route exact path='/' element={<Index/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/Questionnaire' element={<Questionnaire/>} />
        <Route path='/Login' element={<Login signedIn={signedIn} setSignedIn={setSignedIn}/>} />
        <Route path='/SpecialistSignUpForm' element={<SpecialistSignUpForm signedIn={signedIn} setSignedIn={setSignedIn}/>} />
        <Route path='/ParentSignUpForm' element={<ParentSignUpForm signedIn={signedIn} setSignedIn={setSignedIn}/>} />
        <Route path='/PatientSignUpForm' element={<PatientSignUpForm signedIn={signedIn} setSignedIn={setSignedIn}/>} />
        <Route path='/MyAccount' element={<MyAccount userId={userId}/>} />
        <Route path='/EditProfile' element={<EditProfile signedIn={signedIn}/>} />
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