import React, {useState, useEffect} from 'react'

class ApiData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            filterOnApi: this.props.filterOnApi,
        }
    }

    componentDidMount() {
        var axios = require("axios").default;

        var options = {
            method: 'GET',
            url: 'https://yfapi.net/v6/finance/quote',
            headers: {
                'x-rapidapi-key': 'ZLGaf0o70P2ZBZZ9ZBXG6r15FkZkF8q3tjMHOSAe'
            }
        };

        axios.request(options).then((response) => {
            console.log(response.data.data.coins);
            console.log(this.state.filterOnApi)
            this.setState({
                items: response.data.data.coins,
                isLoaded: true
            })
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        var {items} = this.state;

        return(
            <div>
            
            </div>
        );
    }
}

export default ApiData;