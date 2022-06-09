import React from 'react'
import './Indecies.css'
import StocklineFetch from '../Stocklist/StocklineFetch'

export default function Indecies({indecies}) {
  return (
    <div className='indecies-container'>
        <div className='index'>
            <div className='index-title'>
                <p className='stock-name'>NASDAQ</p>
                <p className='index-percent-change'>{indecies[0].regularMarketChangePercent.toFixed(2)}%</p>
            </div>
            <div className='trend-line'>
                <StocklineFetch fetch={indecies[0].symbol}/>
            </div>
        </div>
        <div className='index'>
            <div className='index-title'>
                <p className='stock-name'>SPY</p>
                <p className='index-percent-change'>{indecies[1].regularMarketChangePercent.toFixed(2)}%</p>
            </div>
            <div className='trend-line'>
                <StocklineFetch fetch={indecies[1].symbol}/>
            </div>
        </div>
        <div className='index'>
            <div className='index-title'>
                <p className='stock-name'>DOW</p>
                <p className='index-percent-change'>{indecies[2].regularMarketChangePercent.toFixed(2)}%</p>
            </div>
            <div className='trend-line'>
                <StocklineFetch fetch={indecies[2].symbol}/>
            </div>
        </div>
    </div>
  )
}
