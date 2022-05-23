import React, { Component } from "react";
import Chart from "react-apexcharts";

//in series: data section, stock name is line chart vlues from api
class Stockline extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                
                chart: {
                type: 'line',
                width: 100,
                height: 35,
                sparkline: {
                  enabled: true
                }
               },
                tooltip: {
                fixed: {
                  enabled: false
                },
                x: {
                  show: false
                },
                y: {
                  title: {
                    formatter: function (seriesName) {
                      return ''
                    }
                  }
                },
                marker: {
                  show: false
                }
                }
            },
            series: [{
                data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
              }]
        };
    }

    render (){
        return(
        <div className="app">
            <div className="row">
            <div className="mixed-chart">
                <Chart
                options={this.state.options}
                series={this.state.series}
                type="line"
                height="100"
                width="150"
                />
            </div>
            </div>
        </div>
        )
    }
}

export default Stockline;