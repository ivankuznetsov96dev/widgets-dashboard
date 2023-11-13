import { Directive, ElementRef, Input } from '@angular/core';
import * as echarts from 'echarts';

@Directive({
  selector: '[appChart]'
})
export class ChartDirective {
  @Input() chartType!: string;
  @Input() chartColor!: string;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const chart = echarts.init(this.elementRef.nativeElement);
    const option = {
      // color: [this.chartColor],
      // color: ['#fbd765', '#d1452c'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        left: 'left',
        bottom: '10px',
      },
      xAxis: {
        type: 'category',
        data: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']
      },
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
      {
        type: this.chartType,
        data: [60, 90, 120, 70, 80]
      },
      {
        type: this.chartType,
        data: [30, 20, 120, 50, 90]
      }
    ]
    };
    chart.setOption(option);
  }
}
