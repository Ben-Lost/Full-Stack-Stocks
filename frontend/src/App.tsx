import React, { useEffect, useState } from 'react';
//import { Navbar } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Navbar from './Navbar';
import Map from './Map';

function App() {
  
  return (
    <>
        <Navbar/>

        <Map/>

    </>
    
  );
}



export default App;