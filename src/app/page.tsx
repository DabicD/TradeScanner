import CandleDataMock from "../mocks/wig20_14-01-2026.json";
import AdvancedChart from "../features/chart/components/AdvancedChart";
import type { TYahooCandleData } from "../features/chart/types";
import SeriesSelect from "@/features/chart-controls/components/SeriesSelect";

export default async function Home() {
  return (
    <section className="w-screen min-h-screen p-5">
      <h1>Playground</h1>
      <div className="w-full max-w-50">
        <SeriesSelect chartId="testing-chart" />
      </div>
      <AdvancedChart
        data={CandleDataMock as Array<TYahooCandleData>}
        dataAdapter="yahooFinance"
        id="testing-chart"
      />
    </section>
  );
}
