import {
  AreaSeries,
  BarSeries,
  BaselineSeries,
  CandlestickSeries,
  HistogramSeries,
  LineSeries,
} from "lightweight-charts-react-components";
import type { TChartSeriesKeys, TChartSeriesMap } from "./types";
import { SERIES_TYPE } from "./constants";

export const chartSeriesMap: TChartSeriesMap<TChartSeriesKeys> = {
  [SERIES_TYPE.CANDLESTICK]: {
    Component: CandlestickSeries,
    options: {},
  },
  [SERIES_TYPE.BAR]: {
    Component: BarSeries,
    options: {},
  },
  [SERIES_TYPE.LINE]: {
    Component: LineSeries,
    options: {},
  },
  [SERIES_TYPE.AREA]: {
    Component: AreaSeries,
    options: {},
  },
  // @TODO: Use logic instead of hardcoding
  [SERIES_TYPE.BASELINE]: {
    Component: BaselineSeries,
    options: {
      baseValue: {
        type: "price",
        price: 3255,
      },
      topLineColor: "green",
      bottomLineColor: "red",
    },
  },
  [SERIES_TYPE.HISTOGRAM]: {
    Component: HistogramSeries,
    options: {},
  },
} as const;
