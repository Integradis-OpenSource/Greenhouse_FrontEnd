import { Component } from '@angular/core';

@Component({
  selector: 'app-statistical-reports',
  templateUrl: './statistical-reports.component.html',
  styleUrls: ['./statistical-reports.component.css']
})
export class StatisticalReportsComponent {
  lineChartData: any[] = [
    {
      label: 'Nave 1',
      data: [
        { date: '2023-01-01', value: 10 },
        { date: '2023-01-02', value: 15 },
        { date: '2023-01-03', value: 18 },
        { date: '2023-01-04', value: 12 },
        { date: '2023-01-05', value: 25 },
        { date: '2023-01-06', value: 22 },
        { date: '2023-01-07', value: 17 },
      ]
    },
    {
      label: 'Nave 2',
      data: [
        { date: '2023-01-01', value: 9 },
        { date: '2023-01-02', value: 8 },
        { date: '2023-01-03', value: 10 },
        { date: '2023-01-04', value: 8 },
        { date: '2023-01-05', value: 22 },
        { date: '2023-01-06', value: 25 },
        { date: '2023-01-07', value: 23 },
      ]
    },
    {
      label: 'Nave 3',
      data: [
        { date: '2023-01-01', value: 12 },
        { date: '2023-01-02', value: 13 },
        { date: '2023-01-03', value: 14 },
        { date: '2023-01-04', value: 15 },
        { date: '2023-01-05', value: 20 },
        { date: '2023-01-06', value: 9 },
        { date: '2023-01-07', value: 8 },
      ]
    }
  ];
  chartTitle: string = 'Average carbon dioxide per grow room';
}
