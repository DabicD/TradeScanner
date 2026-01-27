"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { chartSeriesMap } from "@/features/chart/chartSeriesMap";
import type { TChartSeriesKeys } from "@/features/chart/types";
import useChartSeries from "@/hooks/useChartSeries";

export interface ISeriesSelect {
  chartId: string;
}

const SeriesSelect = ({ chartId }: ISeriesSelect) => {
  const { seriesType, setSeriesType } = useChartSeries(chartId);
  const options = Object.keys(chartSeriesMap) as Array<TChartSeriesKeys>;
  return (
    <Select
      value={seriesType}
      onValueChange={(e: TChartSeriesKeys) => setSeriesType(e)}
    >
      <SelectTrigger className="w-full h-full">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* @TODO: add both translations */}
          <SelectLabel>Series Type</SelectLabel>
          {options.map((key) => (
            <SelectItem key={key} value={key}>
              {key}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SeriesSelect;
