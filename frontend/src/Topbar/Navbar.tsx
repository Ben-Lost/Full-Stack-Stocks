import React from 'react';
import Search from './Search';
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
        <nav>
            <div className='logo-container'>
                <div className="logo">Stock Market Tracker</div>
                <Search/>
            </div>
            <ul className='nav-links'> 
                <li><a>Home</a></li>
                <li><a>News</a></li>
                <li><a>Portfolio</a></li>
            </ul>
        </nav>
    </div>
  )
}
