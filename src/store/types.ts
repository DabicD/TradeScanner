import type { TChartSeriesKeys } from "@/features/chart/types";
import type { StateCreator } from "zustand";

// Helpers
export type TCreateSlice<T> = StateCreator<
  T,
  [["zustand/devtools", never]],
  [],
  T
>;

// Slices
export type TChartSeriesSlice = {
  seriesType: Record<string, TChartSeriesKeys>;
  setSeriesType: (chartId: string, value: TChartSeriesKeys) => void;
  resetSeriesType: (chartId: string) => void;
  removeSeriesType: (chartId: string) => void;
};

// Combine
export type TCombinedAppStore = TChartSeriesSlice;
