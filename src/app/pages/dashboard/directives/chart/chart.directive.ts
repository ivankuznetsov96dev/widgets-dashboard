import { Directive, ElementRef, Input } from '@angular/core';
import * as echarts from 'echarts';
import { ChartOptionInterface } from 'src/app/shared/models/chart-option.model';

/**
 * Directive of Charts
 *
 * @export
 * @class ChartDirective
 */
@Directive({
  selector: '[appChart]'
})
export class ChartDirective {
  //*Props
  @Input() chartData!: ChartOptionInterface;

  constructor(private elementRef: ElementRef) {}

  /**
   *ChartDirective ngAfterViewInit
   *
   * @memberof ChartDirective
   */
  ngAfterViewInit() {
    const chart = echarts.init(this.elementRef.nativeElement);
    const option = {
      color: this.chartData.colors,
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
        data: this.chartData.xAxis,
      },
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: this.chartData.series
    };
    chart.setOption(option);
  }
}
