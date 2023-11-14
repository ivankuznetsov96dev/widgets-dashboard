import { ChartConfigInterface } from "./chart-config.model";

export interface DateRangeInterface extends Pick<ChartConfigInterface, 'startDate' | 'endDate'> {}
