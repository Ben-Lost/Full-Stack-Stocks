import React, { useEffect, useState } from 'react';
//import { Navbar } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Navbar from './Topbar/Navbar';
import Treemap from './Treemap/Treemap';
import Indecies from './Indecies/indecies';
import Stocklist from './Stocklist/Stocklist';

function App() {
  
  return (
    <>
        <Navbar/>
        
        <Indecies/>

        <Treemap/>

        <Stocklist/>
    </>
    
  );
}



export default App;