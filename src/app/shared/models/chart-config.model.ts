export interface ChartConfigInterface {
  chartType: 'bar' | 'line';
  sensors: string[];
  startDate: Date;
  endDate: Date;
  colors: string[];
}
