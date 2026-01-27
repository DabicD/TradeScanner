"use client";

import type { TChartSeriesKeys } from "@/features/chart/types";
import { chartSeriesMap } from "@/features/chart/chartSeriesMap";
import { useAppStore } from "@/store/useCombinedStore";

// Help to subscribe and modify seriesType from selected chartId
export const useChartSeries = (id: string) => {
  const seriesType = useAppStore((state) => state.seriesType[id]);
  const setSeriesType = useAppStore((state) => state.setSeriesType);
  const resetSeriesType = useAppStore((state) => state.resetSeriesType);
  const removeSeriesType = useAppStore((state) => state.removeSeriesType);

  // Set initial state if not defined
  if (!seriesType)
    setSeriesType(
      id,
      (Object.keys(chartSeriesMap) as Array<TChartSeriesKeys>)[0],
    );

  return {
    seriesType,
    setSeriesType: (type: TChartSeriesKeys) => setSeriesType(id, type),
    resetSeriesType: () => resetSeriesType(id),
    removeChart: () => removeSeriesType(id),
  };
};

export default useChartSeries;
