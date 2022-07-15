import React from 'react';
import "./App.css";
import Home from './Web Template/Home';
import Contact from './Web Template/Contact';
import About from './Web Template/About';
import Project from './Web Template/Project';
import {Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
      </Routes>
    </>
  );
};

export default App;
