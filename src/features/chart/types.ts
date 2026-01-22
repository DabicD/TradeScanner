import type {
  CandlestickData,
  HistogramData,
  LineData,
  UTCTimestamp,
} from "lightweight-charts";
import type { SeriesProps } from "lightweight-charts-react-components";
import type { ComponentType } from "react";
import stockDataAdapter from "./utils/stockDataAdapter";
import { SERIES_TYPE } from "./constants";

export type TChartSeriesKeys = (typeof SERIES_TYPE)[keyof typeof SERIES_TYPE];
export type TChartSeriesMap<K extends TChartSeriesKeys> = Partial<{
  [key in K]: {
    Component: ComponentType<SeriesProps<K>>;
    options?: SeriesProps<K>["options"];
  };
}>;

export type TYahooCandleData = {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
};
export type TAdapterResultMap = {
  Candlestick: CandlestickData<UTCTimestamp>[];
  Bar: CandlestickData<UTCTimestamp>[];
  Line: LineData<UTCTimestamp>[];
  Area: LineData<UTCTimestamp>[];
  Baseline: LineData<UTCTimestamp>[];
  Histogram: HistogramData<UTCTimestamp>[];
  Custom: never[];
};
export type TAllAdaptersInputs = Parameters<
  (typeof stockDataAdapter)[keyof typeof stockDataAdapter]
>[0];
