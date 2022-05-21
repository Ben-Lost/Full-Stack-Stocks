import React, { useEffect, useState } from 'react';
//import { Navbar } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Navbar from './Topbar/Navbar';
import Treemap from './Treemap/Treemap';
import Watchlist from './Watchlist/Watchlist';

function App() {
  
  return (
    <>
        <Navbar/>

        <Treemap/>

        <Watchlist/>
    </>
    
  );
}



export default App;