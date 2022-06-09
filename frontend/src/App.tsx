import React from 'react';
//import { Navbar } from 'react-bootstrap';
import "./App.css"
import Navbar from './Topbar/Navbar';
import Treemap from './Treemap/Treemap';
import Indecies from './Indecies/Indecies';
import Stocklist from './Stocklist/Stocklist';
import axios from 'axios';


class App extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            quotesArr: [],
            isLoaded: false
        }
    }

    componentDidMount() {
      
        //quotes for top 25 marketcap stocks
        var options = {
            method: 'GET',
            //url: 'https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=AAPL%2CMSFT%2CGOOGL%2CAMZN%2CTSLA%2CBRK-A%2CFB%2CTSM%2CJNJ%2CNVDA%2CUNH%2CV%2CXOM%2CJPM%2CPG%2CWMT%2CMA%2CCVX%2CHD%2CBAC%2CLLY%2CPFE%2CKO%2CABBV%2CBABA',
            url: 'https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=AAPL%2CMSFT%2CGOOGL%2CAMZN%2CTSLA%2CBRK-A%2CFB%2CTSM%2CJNJ%2CNVDA%2CUNH%2CV%2CXOM%2CJPM%2CPG%2CWMT%2CMA%2CCVX%2CHD%2CBAC%2CLLY%2CPFE%2CKO%2CABBV%2CBABA%2C%5EIXIC%2CSPY%2C%5EDJI',
            headers: {
              'x-api-key': 'ZLGaf0o70P2ZBZZ9ZBXG6r15FkZkF8q3tjMHOSAe'
            }
        };

        axios.request(options).then((response) => {
            console.log(response.data);
            //console.log(this.state.filterOnApi)
            this.setState({
                quotesArr: response.data.quoteResponse.result,
                isLoaded: true
            })
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        var {isLoaded, quotesArr} = this.state;
        let indecies = quotesArr.splice(25,28);
        console.log(indecies)
        if (!isLoaded) {

    
        }
        else {
            return(
                <div>
                    <Navbar/>
                    <div className='overview-container'>
                        <Indecies indecies={indecies}/>
                        <Treemap quotesArr={quotesArr}/>
                    </div>
                    <Stocklist quotesArr={quotesArr}/>
                </div>
            );
        }

    }
}


export default App;