import { ChartSeriesInterface } from "./chart-series.model";

export interface ChartOptionInterface {
  id: string;
  startDate: Date;
  endDate: Date;
  colors: string[];
  xAxis: string[];
  series: ChartSeriesInterface[];
}
