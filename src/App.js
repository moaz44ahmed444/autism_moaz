import React, { Component } from "react";
import Contact from "./Component/Contact"
import Index from "./Component/Index";
import Navbar from "./Component/Navbar";
import Login from "./Component/Login";
import MyAccount from "./Component/MyAccount";
import Questionnaire from "./Component/Questionnaire";
import Treatments from "./Component/Treatments";
import Game from "./Component/Treatments/Game"

import { BrowserRouter , Route , Routes } from 'react-router-dom';

const App = () => {
  const userId = '123'; // This could be the user's ID from the login page
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Index/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/Questionnaire' element={<Questionnaire/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/MyAccount' element={<MyAccount userId={userId}/>} />
        <Route path='/Treatments' element={<Treatments/>} />
        <Route path='/Game1' element={<Game index={1}/>} />
        <Route path='/Game2' element={<Game index={2}/>} />
        <Route path='/Game3' element={<Game index={3}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;