import { ChartConfigInterface } from "./chart-config.model";

/**
 * Interface for global date range fg
 *
 * @export
 * @interface DateRangeInterface
 * @extends {(Pick<ChartConfigInterface, 'startDate' | 'endDate'>)}
 */
export interface DateRangeInterface extends Pick<ChartConfigInterface, 'startDate' | 'endDate'> {}
