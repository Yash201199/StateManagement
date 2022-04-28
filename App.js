import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import About from "./Components/About";
import Contact from "./Components/Contact";
// import Login from "./Components/Login";
import Register from "./Components/Register";

import Navbar  from "./Components/Navbar";
import NotFound from "./Components/NotFound";
import AddUser from './Users/AddUser';

import View from "./Users/View";
import Edit from './Users/Edit'
const App = (props) => {
  return (
    <>
    
      <BrowserRouter>
        <div className="App">
          <Navbar  title = "Project"/>
          {/* <Dashboard/> */}
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/contact" element={<Contact/>}/>
            <Route exact path="/register" element={<Register />} />
            <Route element= {<NotFound/>}/>
            <Route exact path="/users/add" element={<AddUser/>}/>
            <Route exact path="/users/:id" element={<View/>}/>
            <Route exact path="/users/edit/:id" element={<Edit/>}/>
            
          </Routes>
        </div>
      </BrowserRouter>
      
    </>
  );
};

export default App;

/* <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} /> */ 