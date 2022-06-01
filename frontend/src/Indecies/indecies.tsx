import React from 'react'
import './Indecies.css'
import Stockline from '../Stocklist/Stockline'

export default function indecies({indecies}) {
  return (
    <div className='indecies-container'>
        <div className='index'>
            <div className='index-title'>
                <p className='stock-name'>NASDAQ</p>
                <p className='index-percent-change'>{indecies[0].regularMarketChangePercent}%</p>
            </div>
            <div className='trend-line'>
                <Stockline/>
            </div>
        </div>
        <div className='index'>
            <div className='index-title'>
                <p className='stock-name'>SPY</p>
                <p className='index-percent-change'>{indecies[1].regularMarketChangePercent}%</p>
            </div>
            <div className='trend-line'>
                <Stockline/>
            </div>
        </div>
        <div className='index'>
            <div className='index-title'>
                <p className='stock-name'>DOW</p>
                <p className='index-percent-change'>{indecies[2].regularMarketChangePercent}%</p>
            </div>
            <div className='trend-line'>
                <Stockline/>
            </div>
        </div>
    </div>
  )
}
