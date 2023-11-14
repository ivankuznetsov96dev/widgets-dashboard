import { ChartSeriesInterface } from "./chart-series.model";

/**
 * Final Chart Option interface
 *
 * @export
 * @interface ChartOptionInterface
 */
export interface ChartOptionInterface {
  id: string;
  startDate: Date;
  endDate: Date;
  colors: string[];
  xAxis: string[];
  series: ChartSeriesInterface[];
}
