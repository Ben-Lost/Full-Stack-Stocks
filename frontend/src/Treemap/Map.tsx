import React, { Component } from "react";
import Chart from "react-apexcharts";

//treemap for displaying 24hr percent changes of stocks
//treemap gives largest market cap stocks the biggest area
//series: data needs to read data from api, stock name and market cap

class Map extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {

        options: {
            legend: {
            show: false
          },
          chart: {
            height: 350,
            type: 'treemap'
          },
          title: {
            text: 'Treemap example'
          },
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '12px',
            },
            formatter: function(text, op) {
              return [text, op.value]
            },
            offsetY: -4
          },
          plotOptions: {
            treemap: {
              enableShades: true,
              shadeIntensity: 0.5,
              reverseNegativeShade: true,
              colorScale: {
                ranges: [
                  {
                    from: -6,
                    to: 0,
                    color: '#CD363A'
                  },
                  {
                    from: 0.001,
                    to: 6,
                    color: '#52B12C'
                  }
                ]
              }
            }
          }
        },
        series: [
            {
              data: [
                {
                  x: 'INTC',
                  y: 1.2
                },
                {
                  x: 'GS',
                  y: 0.4
                },
                {
                  x: 'CVX',
                  y: -1.4
                },
                {
                  x: 'GE',
                  y: 2.7
                },
                {
                  x: 'CAT',
                  y: -0.3
                },
                {
                  x: 'RTX',
                  y: 5.1
                },
                {
                  x: 'CSCO',
                  y: -2.3
                },
                {
                  x: 'JNJ',
                  y: 2.1
                },
                {
                  x: 'PG',
                  y: 0.3
                },
                {
                  x: 'TRV',
                  y: 0.12
                },
                {
                  x: 'MMM',
                  y: -2.31
                },
                {
                  x: 'NKE',
                  y: 3.98
                },
                {
                  x: 'IYT',
                  y: 1.67
                }
              ]
            }
          ],
    };
  }

  render() {
    return (
        <div className="app">
            <div className="row">
            <div className="mixed-chart">
                <Chart
                options={this.state.options}
                series={this.state.series}
                type="treemap"
                height="500"
                width="500"
                />
            </div>
            </div>
        </div>
    );
  }
}

export default Map;

//functional treemap
/*export default function Map() {
    const [options, setObject] = useState({
        chart: {
            id: "treemap"
          },
          
    })

    
    const [series, setSeries] = useState ([{
        data: [
            {
              x: "APPL",
              y: 218,
            },
            {
              x: "GOOG",
              y: 149,
            },
            {
              x: "NVDA",
              y: 184,
            },
            {
              x: "AMZN",
              y: 55,
            },
            {
              x: "TSLA",
              y: 84,
            },
            {
              x: "UPST",
              y: 31,
            },
            {
              x: "TEST",
              y: 70,
            }
        ]
    }])

    return (
        <Chart
            options={options}
            series={series}
            type="treemap"
            width="500"
        />
  )
}*/

