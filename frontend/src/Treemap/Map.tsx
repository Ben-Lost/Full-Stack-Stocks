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
            /*legend: {
            show: false
          },*/
          chart: {
            height: 350,
            type: 'treemap'
          },
          /*title: {
            text: 'Treemap example'
          },*/
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
              shadeIntensity: .2,
              reverseNegativeShade: true,
              colorScale: {
                ranges: [
                  {
                    from: -100,
                    to: 0,
                    color: '#CD363A'
                  },
                  {
                    from: 0.001,
                    to: 100,
                    color: '#52B12C'
                  }
                ]
              }
            }
          }
        },
        series: [
            {
              data: this.props.data
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