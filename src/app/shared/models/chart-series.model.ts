/**
 * series for charts graph
 *
 * @export
 * @interface ChartSeriesInterface
 */
export interface ChartSeriesInterface {
  name: string;
  type: 'bar' | 'line';
  data: number[];
}
