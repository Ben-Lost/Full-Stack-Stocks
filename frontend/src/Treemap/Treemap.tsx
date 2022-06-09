import React from 'react';
import './Treemap.css';
import Map from './Map';

export default function Treemap({quotesArr}) {

    //adds data from api into readable data for treemap
    let treeMapData = [{}];
    for (let i = 0; i < quotesArr.length; i++) {
        treeMapData.push({
            x: quotesArr[i].symbol,
            y: quotesArr[i].regularMarketChangePercent.toFixed(2)
        })
    }
    
    treeMapData.shift();
    console.log(treeMapData);

    return (
        <div className='map-container'>
            <Map data={treeMapData}/>
        </div>
  )
}
