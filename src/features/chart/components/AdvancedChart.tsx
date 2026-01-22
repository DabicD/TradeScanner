"use client";

import {
  Chart,
  TimeScale,
  TimeScaleFitContentTrigger,
} from "lightweight-charts-react-components";
import type { ChartOptions, DeepPartial } from "lightweight-charts";
import { chartSeriesMap } from "../chartSeriesMap";
import { useMemo, useState } from "react";
import type { TAllAdaptersInputs, TChartSeriesKeys } from "../types";
import stockDataAdapter from "../utils/stockDataAdapter";

export interface IAdvancedChart {
  data: TAllAdaptersInputs;
  dataAdapter: keyof typeof stockDataAdapter;
}

const AdvancedChart = ({ data = [], dataAdapter }: IAdvancedChart) => {
  // @TODO: replace with zustand, move select to separate component.
  const options = Object.keys(chartSeriesMap) as Array<TChartSeriesKeys>;
  const [selectedSeries, setSelectedSeries] = useState<TChartSeriesKeys>(
    options?.[0] || "Candlestick",
  );
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSeries(e.target.value as TChartSeriesKeys);
  };

  // Adapting data to newly selected ChartSeries.
  const [ChartSeriesComponent, chartSeriesOptions] = useMemo(
    () => [
      chartSeriesMap[selectedSeries]?.Component,
      chartSeriesMap[selectedSeries]?.options,
    ],
    [selectedSeries],
  );
  const transformedData = useMemo(
    () => stockDataAdapter[dataAdapter](data, selectedSeries),
    [dataAdapter, data, selectedSeries],
  );

  return (
    <section className="flex flex-col h-150 gap-5">
      {/* @TODO: move to separate file */}
      <select
        value={selectedSeries}
        onChange={handleChange}
        className="p-2 border rounded bg-black"
      >
        {options.map((key) => (
          <option key={key} value={key}>
            {/* @TODO: add translation */}
            {key}
          </option>
        ))}
      </select>
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
