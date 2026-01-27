"use client";

import {
  Chart,
  TimeScale,
  TimeScaleFitContentTrigger,
} from "lightweight-charts-react-components";
import type { ChartOptions, DeepPartial } from "lightweight-charts";
import { useMemo } from "react";
import type { TAllAdaptersInputs } from "../types";
import stockDataAdapter from "../utils/stockDataAdapter";
import { chartSeriesMap } from "../chartSeriesMap";
import useChartSeries from "@/hooks/useChartSeries";

export interface IAdvancedChart {
  data: TAllAdaptersInputs;
  dataAdapter: keyof typeof stockDataAdapter;
  id: string;
}

const AdvancedChart = ({
  data = [],
  dataAdapter,
  id: chartId,
}: IAdvancedChart) => {
  const { seriesType } = useChartSeries(chartId);

  // Select chart series type
  const [ChartSeriesComponent, chartSeriesOptions] = useMemo(
    () => [
      chartSeriesMap[seriesType]?.Component,
      chartSeriesMap[seriesType]?.options,
    ],
    [seriesType],
  );
  // Data adaptation
  const transformedData = useMemo(
    () => stockDataAdapter[dataAdapter](data, seriesType),
    [dataAdapter, data, seriesType],
  );

  return (
    <section className="flex flex-col h-150 gap-5">
      <Chart
        options={chartCommonOptions}
        containerProps={{ style: { flexGrow: "1" } }}
      >
        {ChartSeriesComponent && (
          <ChartSeriesComponent
            data={transformedData}
            options={chartSeriesOptions}
            reactive={false}
          />
        )}
        <TimeScale>
          <TimeScaleFitContentTrigger deps={[]} />
        </TimeScale>
      </Chart>
    </section>
  );
};
export default AdvancedChart;

const chartCommonOptions = {
  autoSize: true,
  layout: {
    attributionLogo: false,
    background: {
      color: "black",
    },
    textColor: "gray",
  },
  grid: {
    vertLines: {
      visible: false,
    },
    horzLines: {
      visible: false,
    },
  },
  crosshair: {
    vertLine: {
      style: 3,
      color: "gray",
    },
    horzLine: {
      style: 3,
      color: "gray",
    },
  },
} satisfies DeepPartial<ChartOptions>;
