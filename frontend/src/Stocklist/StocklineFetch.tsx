import React from 'react'
import axios from 'axios';
import Stockline from './Stockline';

class StocklineFetch extends React.Component<any,any> {
    constructor(props) {
        super(props);
        this.state = {
            priceHistory: [],
            isLoaded: false,
            stockSymbol: this.props.fetch
        }
    }
    
    componentDidMount() {

        //alters string if it has special character
        let newString = this.props.fetch.split("");
        if (newString[0] === '^')
            newString[0] = '%5E'
        newString = newString.join("");

        const fetchurl = 'https://yfapi.net/v8/finance/spark?interval=5m&range=1d&symbols=' + newString;
        console.log('this symbol i need to look up ' + this.state.stockSymbol);
        //quotes for top 25 marketcap stocks
        var options = {
            method: 'GET',
            //url: 'https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=AAPL%2CMSFT%2CGOOGL%2CAMZN%2CTSLA%2CBRK-A%2CFB%2CTSM%2CJNJ%2CNVDA%2CUNH%2CV%2CXOM%2CJPM%2CPG%2CWMT%2CMA%2CCVX%2CHD%2CBAC%2CLLY%2CPFE%2CKO%2CABBV%2CBABA',
            url: fetchurl,
            headers: {
              'x-api-key': 'ZLGaf0o70P2ZBZZ9ZBXG6r15FkZkF8q3tjMHOSAe'
            }
          };

        axios.request(options).then((response) => {
            console.log(response.data);
           
            this.setState({
                priceHistory: response.data,
                isLoaded: true
            })
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        var {isLoaded, priceHistory} = this.state;
       
        if (!isLoaded) {
            return (
                <p>
                    Loading...
                </p>
            );
        }
        else {
            return(
                <div>
                    <Stockline priceHistory={priceHistory[this.state.stockSymbol].close}/>
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


export default StocklineFetch;