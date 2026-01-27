import type { TCreateSlice, TChartSeriesSlice } from "../types";
import { STORE_ACTIONS } from "../constants";
import { SERIES_TYPE } from "@/features/chart/constants";

export const createChartSeriesSlice: TCreateSlice<TChartSeriesSlice> = (
  set,
) => ({
  seriesType: {},
  setSeriesType: (chartId, value) =>
    set(
      (state) => ({
        seriesType: {
          ...state.seriesType,
          [chartId]: value,
        },
      }),
      false,
      `${STORE_ACTIONS.SET_SERIES_TYPE}/${chartId}`,
    ),
  resetSeriesType: (chartId) =>
    set(
      (state) => ({
        seriesType: {
          ...state.seriesType,
          [chartId]: SERIES_TYPE.CANDLESTICK,
        },
      }),
      false,
      `${STORE_ACTIONS.RESET_SERIES_TYPE}/${chartId}`,
    ),
  removeSeriesType: (chartId) =>
    set(
      (state) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [chartId]: skipped, ...seriesType } = state.seriesType;
        return { seriesType };
      },
      false,
      `${STORE_ACTIONS.REMOVE_SERIES_TYPE}/${chartId}`,
    ),
});
