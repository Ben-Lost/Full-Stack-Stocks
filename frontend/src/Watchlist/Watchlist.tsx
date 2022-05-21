import React from 'react'
import WatchlistLine from './WatchlistLine'
import './Watchlist.css'

//needs to read data from api and enter name in stockname
//and percent change (24hr) in percent change

export default function Watchlist() {
  return (
        <div className='watchlist-container'>
            <p className='stock-name'>Stock name</p>
            <div className='watchlist-line'>
                <WatchlistLine/>
            </div>
            <p className='percent-change'>+2.3%</p>
        </div>
    )
}
