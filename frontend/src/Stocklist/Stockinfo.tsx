import React from 'react'
import Stockline from './Stockline'
import './Stockinfo.css'

//needs to read data from api and enter name in stockname
//and percent change (24hr) in percent change

//should take argument of stock info
export default function Stockinfo() {
  return (
        <div className='watchlist-container'>
            <p className='stock-name'>Stock name</p>
            <div className='watchlist-line'>
                <Stockline/>
            </div>
            <p className='percent-change'>+2.3%</p>
        </div>
    )
}
