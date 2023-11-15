import { ChartOptionInterface } from 'src/app/shared/models/chart-option.model';
import { ChartDirective } from './chart.directive';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import * as echarts from 'echarts';

@Component({
  template: `<div appChart [chartData]="chartData"></div>`
})
class TestComponent {
  public chartData: ChartOptionInterface = {
    id: 'chart1',
    startDate: new Date(),
    endDate: new Date(),
    colors: ['blue', 'green'],
    xAxis: ['Jan', 'Feb', 'Mar'],
    series: [
      {
        name: 'Chart 1',
        type: 'bar',
        data: [10, 20, 30],
      },
      {
        name: 'Chart 2',
        type: 'line',
        data: [5, 15, 25],
      },
    ],
  };
}

describe('ChartDirective', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartDirective, TestComponent],
    }).compileComponents();
  });

  xit('should create an instance', () => {
    const fixture = TestBed.createComponent(TestComponent);
    const directive = new ChartDirective(fixture.elementRef);
    const component = fixture.componentInstance;
    console.log(directive)
    expect(directive).toBeTruthy();

    const spy = spyOn(echarts, 'init').and.returnValue(fixture.elementRef.nativeElement);
    expect(spy).toHaveBeenCalledWith(fixture.elementRef.nativeElement);

    const expectedOption = {
      color: component.chartData.colors,
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
        data: component.chartData.xAxis,
      },
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: component.chartData.series,
    };


  });
});
