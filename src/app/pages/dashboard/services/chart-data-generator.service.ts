import { ApplicationRef, Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { DefaultColorsConstant } from "src/app/shared/constants/default-colors.constant";
import { MonthConstant } from "src/app/shared/constants/month.constant";
import { ChartConfigInterface } from "src/app/shared/models/chart-config.model";
import { ChartOptionInterface } from "src/app/shared/models/chart-option.model";
import { DateRangeInterface } from "src/app/shared/models/date-range.model";
import * as uuid from 'uuid';

/**
 * Service to generate and work with chart data
 *
 * @export
 * @class ChartDataGeneratorService
 */
@Injectable()
export class ChartDataGeneratorService {

  //*chartsList props
  private _chartsList: BehaviorSubject<ChartOptionInterface[]> = new BehaviorSubject<ChartOptionInterface[]>([]);
  readonly chartsList$: Observable<ChartOptionInterface[]> = this._chartsList.asObservable();

  constructor(
    private appRef: ApplicationRef
    ) {}

  /**
   * Func delete chart in chartlist by id
   *
   * @public
   * @param {string} id
   * @memberof ChartDataGeneratorService
   */
  public deleteChart(id: string): void {
    const updatedChartsList = this._chartsList.getValue().filter((chart: ChartOptionInterface) => chart.id !== id);
    if (updatedChartsList) {
      this._chartsList.next(updatedChartsList);
    }
  }

  /**
   * Func for modify date range in all charts
   *
   * @public
   * @param {DateRangeInterface} data
   * @memberof ChartDataGeneratorService
   */
  public modifyDateRange(data: DateRangeInterface): void {
    const xRange = this.xAxisGenerator(data.startDate, data.endDate);
    const chartsList = this._chartsList.getValue().map((chart: ChartOptionInterface) =>
      ({...chart, xAxis: xRange}));
      this._chartsList.next([]);
      this.appRef.tick();
      this._chartsList.next(chartsList);
  }

  /**
   * Func to generate new charts data
   *
   * @public
   * @param {ChartConfigInterface} data
   * @memberof ChartDataGeneratorService
   */
  public dataGenerate(data: ChartConfigInterface): void {
    const xRange = this.xAxisGenerator(data.startDate, data.endDate);
    const config: ChartOptionInterface = {
      id:  uuid.v4(),
      startDate: data.startDate,
      endDate: data.endDate,
      colors: data.colors.map((color: string, index: number) => color ? color : DefaultColorsConstant[index]),
      xAxis: xRange,
      series: data.sensors.map((sensor: string) => ({name: sensor, type: data.chartType, data: this.seriesDataGenerator(xRange.length)})),
    }
    this._chartsList.next([...this._chartsList.getValue(), config]);
  }

  /**
   * Func to generate xAxis(date range) prop for chart
   *
   * @private
   * @param {Date} start
   * @param {Date} end
   * @return {*}  {string[]}
   * @memberof ChartDataGeneratorService
   */
  private xAxisGenerator(start: Date, end: Date): string[] {
    const startDay = start.getDate();
    const endDay = end.getDate();
    const startMonth = start.getMonth() + 1;
    const endMonth = end.getMonth() + 1;
    const startYear = start.getFullYear();
    const endYear = end.getFullYear();
    const differenceInDays= this.getDifferenceInDays(start, end);

    let timePeriod: string[] = [];

    if (startDay === endDay && startMonth === endMonth && startYear === endYear) {
      for (let i = 0; i < 24; i++) {
        timePeriod.push(`${String(i).padStart(2, '0')}:00`);
      }
    } else if (startYear === endYear && differenceInDays <= 30) {
      for (let i = 0; i <= differenceInDays; i++) {
        const newDate = new Date(start.getTime());
        newDate.setDate(startDay + i)
        timePeriod.push(`${newDate.getDate()}.${newDate.getMonth() + 1}`);
      }
    } else if (startYear === endYear && differenceInDays > 30) {
      const months = MonthConstant;
      const monthsArray = [];
      let currentDate = new Date(start);
      while (currentDate <= end) {
        const monthName = months[currentDate.getMonth()];
        monthsArray.push(monthName);
        currentDate.setMonth(currentDate.getMonth() + 1);
      }
      timePeriod = monthsArray;
    } else if (startYear !== endYear) {
      let years = [];
      for (let year = startYear; year <= endYear; year++) {
        years.push(year.toString());
      }
      timePeriod = years;
    }
    return timePeriod;
  }

  /**
   * Func to getting difference in days range
   *
   * @private
   * @param {Date} start
   * @param {Date} end
   * @return {*}  {number}
   * @memberof ChartDataGeneratorService
   */
  private getDifferenceInDays(start: Date, end: Date): number {
    const oneDay: number = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs((start.getTime() - end.getTime()) / oneDay));
  }

  /**
   * Func to generate chart value data
   * (must be change on getting fom API)
   *
   * @private
   * @param {number} length
   * @return {*}  {number[]}
   * @memberof ChartDataGeneratorService
   */
  private seriesDataGenerator(length: number): number[] {
    const data = [];
    for (let i = 0; i < length; i++) {
      data.push(Math.floor(Math.random() * 100));
    }
    return data;
  }
}
