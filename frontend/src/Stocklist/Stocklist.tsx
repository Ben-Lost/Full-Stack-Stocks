import React from 'react'
import Stockinfo from './Stockinfo'
import './Stocklist.css'

//will run a function that iterates through stock array and send info to stockinfo
export default function Stocklist({quotesArr}) {

  return (
    //test
        <table>
            <tr className='table-header'>
                <th className='name-header'>Name</th>
                <th className='line-header'>Price (24 hours) </th>
                <th className='market-cap-header'>Market Cap</th>
                <th className='price-header'>Price</th>
                <th className='percent-change-header'>Change <br/>(24 hours)</th>
            </tr>
            {quotesArr.map(item => (
            <Stockinfo stockinfo={item}/>
        )  )}
        </table>
  )
}
