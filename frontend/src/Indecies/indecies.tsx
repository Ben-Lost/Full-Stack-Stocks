import React from 'react'
import './Indecies.css'
import Stockline from '../Stocklist/Stockline'

export default function indecies() {
  return (
    <div className='indecies-container'>
        <div className='index'>
            <div className='index-title'>
                <p className='stock-name'>Index name</p>t
                <p className='percent-change'>+2.3%</p>
            </div>
            <div className='watchlist-line'>
                <Stockline/>
            </div>
        </div>
        <div className='index'>
            <div className='index-title'>
                <p className='stock-name'>Index name</p>
                <p className='percent-change'>+2.3%</p>
            </div>
            <div className='watchlist-line'>
                <Stockline/>
            </div>
        </div>
        <div className='index'>
            <div className='index-title'>
                <p className='stock-name'>Index name</p>
                <p className='percent-change'>+2.3%</p>
            </div>
            <div className='watchlist-line'>
                <Stockline/>
            </div>
        </div>
    </div>
  )
}
