import { Component } from '@angular/core';

@Component({
  selector: 'app-statistical-reports',
  templateUrl: './statistical-reports.component.html',
  styleUrls: ['./statistical-reports.component.css']
})
export class StatisticalReportsComponent {
  lineChartCarbonDioxideData: any[] = [
    {
      label: 'Growroom 1',
      data: [
        { date: '2023-01-01', value: 2319 },
        { date: '2023-01-02', value: 2316 },
        { date: '2023-01-03', value: 2317 },
        { date: '2023-01-04', value: 2320 },
        { date: '2023-01-05', value: 2322 },
        { date: '2023-01-06', value: 2325 },
        { date: '2023-01-07', value: 2322 },
      ]
    },
    {
      label: 'Growroom 2',
      data: [
        { date: '2023-01-01', value: 2322 },
        { date: '2023-01-02', value: 2325 },
        { date: '2023-01-03', value: 2323 },
        { date: '2023-01-04', value: 2317 },
        { date: '2023-01-05', value: 2316 },
        { date: '2023-01-06', value: 2318 },
        { date: '2023-01-07', value: 2319 },
      ]
    },
    {
      label: 'Growroom 3',
      data: [
        { date: '2023-01-01', value: 2316 },
        { date: '2023-01-02', value: 2317 },
        { date: '2023-01-03', value: 2318 },
        { date: '2023-01-04', value: 2318 },
        { date: '2023-01-05', value: 2317 },
        { date: '2023-01-06', value: 2320 },
        { date: '2023-01-07', value: 2321 },
      ]
    }
  ];
  chartCarbonDioxideTitle: string = 'Average carbon dioxide per grow room';


  lineChartAirHumidityData: any[] = [
    {
      label: 'Growroom 1',
      data: [
        { date: '2023-01-01', value: 92 },
        { date: '2023-01-02', value: 93 },
        { date: '2023-01-03', value: 92 },
        { date: '2023-01-04', value: 91 },
        { date: '2023-01-05', value: 94 },
        { date: '2023-01-06', value: 93 },
        { date: '2023-01-07', value: 92 },
      ]
    },
    {
      label: 'Growroom 2',
      data: [
        { date: '2023-01-01', value: 92 },
        { date: '2023-01-02', value: 92 },
        { date: '2023-01-03', value: 93 },
        { date: '2023-01-04', value: 94 },
        { date: '2023-01-05', value: 93 },
        { date: '2023-01-06', value: 92 },
        { date: '2023-01-07', value: 91 },
      ]
    },
    {
      label: 'Growroom 3',
      data: [
        { date: '2023-01-01', value: 93 },
        { date: '2023-01-02', value: 94 },
        { date: '2023-01-03', value: 92 },
        { date: '2023-01-04', value: 93 },
        { date: '2023-01-05', value: 91 },
        { date: '2023-01-06', value: 90 },
        { date: '2023-01-07', value: 90 },
      ]
    }
  ];
  chartAirHumidityTitle: string = 'Average air humidity per grow room';

  lineChartCompostTemperatureData: any[] = [
    {
      label: 'Growroom 1',
      data: [
        { date: '2023-01-01', value: 23 },
        { date: '2023-01-02', value: 24 },
        { date: '2023-01-03', value: 23 },
        { date: '2023-01-04', value: 23 },
        { date: '2023-01-05', value: 24 },
        { date: '2023-01-06', value: 24 },
        { date: '2023-01-07', value: 24 },
      ]
    },
    {
      label: 'Growroom 2',
      data: [
        { date: '2023-01-01', value: 24 },
        { date: '2023-01-02', value: 23 },
        { date: '2023-01-03', value: 23 },
        { date: '2023-01-04', value: 24 },
        { date: '2023-01-05', value: 23 },
        { date: '2023-01-06', value: 23 },
        { date: '2023-01-07', value: 23 },
      ]
    },
    {
      label: 'Growroom 3',
      data: [
        { date: '2023-01-01', value: 24 },
        { date: '2023-01-02', value: 24 },
        { date: '2023-01-03', value: 24 },
        { date: '2023-01-04', value: 23 },
        { date: '2023-01-05', value: 24 },
        { date: '2023-01-06', value: 23 },
        { date: '2023-01-07', value: 23 },
      ]
    }
  ];
  chartCompostTemperatureTitle: string = 'Average compost temperature per grow room';
}
