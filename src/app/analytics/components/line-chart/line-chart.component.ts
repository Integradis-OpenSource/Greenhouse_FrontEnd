import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-line-chart',
  template: '<ag-charts-angular [options]="chartOptions"></ag-charts-angular>',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnChanges {
  @Input() chartData: any[] = [];
  @Input() chartTitle: string = 'Default Title';

  chartOptions!: AgChartOptions;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chartData']) {
      this.chartOptions = {
        autoSize: true,
        theme: {
          overrides: {
            line: {
              series: {
                highlightStyle: {
                  series: {
                    strokeWidth: 3,
                    dimOpacity: 0.2,
                  },
                },
              },
            },
          },
        },
        title: {
          text: this.chartTitle,
          fontSize: 16,
          spacing: 25,
        },
        series: this.chartData.map((seriesData, index) => ({
          type: 'line',
          xKey: 'date',
          yKey: 'value',
          stroke: this.getColor(index),
          marker: {
            stroke: this.getColor(index),
            fill: this.getColor(index),
          },
          data: seriesData.data,
          title: seriesData.label,
        })),
      };
    }
  }
  private getColor(index: number): string {
    const colors = ['#4A845B', '#FF5733', '#1F618D', '#F39C12', '#922B21', '#6C3483', '#148F77'];
    return colors[index % colors.length];
  }
}
