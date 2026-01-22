"use client";

import type { UTCTimestamp } from "lightweight-charts";
import type {
  TAdapterResultMap,
  TChartSeriesKeys,
  TYahooCandleData,
} from "../types";
import { SERIES_TYPE } from "../constants";

// Adapters
export const yahooDataAdapter = <T extends TChartSeriesKeys>(
  from: TYahooCandleData[],
  to: T,
): TAdapterResultMap[T] => {
  const yahooDateToUTCTimestamp = (time: string) =>
    (new Date(time).getTime() / 1000) as UTCTimestamp;
  switch (to) {
    case SERIES_TYPE.CANDLESTICK:
    case SERIES_TYPE.BAR:
      return from.map((item) => ({
        time: yahooDateToUTCTimestamp(item.date),
        open: item.open,
        high: item.high,
        low: item.low,
        close: item.close,
      })) as TAdapterResultMap[T];
    case SERIES_TYPE.LINE:
    case SERIES_TYPE.AREA:
    case SERIES_TYPE.BASELINE:
      return from.map((item) => ({
        time: yahooDateToUTCTimestamp(item.date),
        value: item.close,
      })) as TAdapterResultMap[T];
    case SERIES_TYPE.HISTOGRAM:
      return from.map((item) => ({
        time: yahooDateToUTCTimestamp(item.date),
        value: item.close,
        color: item.open > item.close ? "red" : "green",
      })) as TAdapterResultMap[T];
    default:
      return [];
  }
};

// Combined adapter
const stockDataAdapter = {
  yahooFinance: yahooDataAdapter,
};

export default stockDataAdapter;
