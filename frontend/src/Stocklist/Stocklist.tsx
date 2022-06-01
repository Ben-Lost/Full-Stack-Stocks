import React from 'react'
import Stockinfo from './Stockinfo'

//will run a function that iterates through stock array and send info to stockinfo
export default function Stocklist({items}) {
    let quotesArr = items.quoteResponse.result;

  return (
    <div>
        <div>{quotesArr[1].symbol}</div>
        <Stockinfo stockinfo={quotesArr[1]}/>
        
    </div>
  )
}
