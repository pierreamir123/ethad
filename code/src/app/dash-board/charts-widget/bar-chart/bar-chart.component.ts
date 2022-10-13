import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css' , '../../../app.component.css']
})
export class BarChartComponent implements OnInit {
  public chart1: any;
  public chart2: any;
  public chart3: any;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){

    this.chart1 = new Chart("MyChart1", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['jan' ,'feb','march','april','may' ],
	       datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio:3
      }

    });

    this.chart2 = new Chart("MyChart2", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['jan' ,'feb','march','april','may' ],
	       datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio:3
      }

    });

    this.chart3 = new Chart("MyChart3", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['jan' ,'feb','march','april','may' ],
	       datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio:3
      }

    });
  }




}
