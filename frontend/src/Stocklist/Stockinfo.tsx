import React from 'react'
import Stockline from './Stockline'
import './Stockinfo.css'

//needs to read data from api and enter name in stockname
//and percent change (24hr) in percent change

//should take argument of stock info
export default function Stockinfo({stockinfo}) {
  return (
        <tr className='info-container'>
            <td className='stock-name'>
                <p className='stock-long-name'>{stockinfo.longName}</p>
                <p className='stock-ticker'>{stockinfo.symbol}</p>
            </td>
            <td className='stockline'>
                <Stockline/>
            </td>
            <td className='market-cap'>${stockinfo.marketCap}</td>
            <td className='market-price'>${stockinfo.regularMarketPrice}</td>
            <td className='percent-change'>{stockinfo.regularMarketChangePercent}%</td>
        </tr>
    )
}
