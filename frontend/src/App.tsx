import React, { useEffect, useState } from 'react';
//import { Navbar } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Navbar from './Topbar/Navbar';
import Treemap from './Treemap/Treemap';
import Indecies from './Indecies/indecies';
import Stocklist from './Stocklist/Stocklist';
import axios from 'axios';


class App extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
      
        //quotes for top 25 marketcap stocks
        var options = {
            method: 'GET',
            url: 'https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=AAPL%2CMSFT%2CGOOGL%2CAMZN%2CTSLA%2CBRK-A%2CFB%2CTSM%2CJNJ%2CNVDA%2CUNH%2CV%2CXOM%2CJPM%2CPG%2CWMT%2CMA%2CCVX%2CHD%2CBAC%2CLLY%2CPFE%2CKO%2CABBV%2CBABA',
            headers: {
              'x-api-key': 'ZLGaf0o70P2ZBZZ9ZBXG6r15FkZkF8q3tjMHOSAe'
            }
          };

        axios.request(options).then((response) => {
            console.log(response.data);
            //console.log(this.state.filterOnApi)
            this.setState({
                items: response.data,
                isLoaded: true
            })
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        var {isLoaded, items} = this.state;
        if (!isLoaded) {
            <div>
                Loading...
            </div>
        }
        else {
            return(
                <div>
                    <Navbar/>
            
                    <Indecies/>

                    <Treemap/>

                    <Stocklist items={items} />
                </div>
            );
        }
        
    }
}

/*
export default App;
function App() {
  
  return (
    <>
       
    </>
    
  );
}
*/


export default App;