import CandleDataMock from "../mocks/wig20_14-01-2026.json";
import AdvancedChart from "../features/chart/components/AdvancedChart";
import type { TYahooCandleData } from "../features/chart/types";

export default async function Home() {
  return (
    <section className="w-full min-h-[100wh] p-5">
      <h1>Playground</h1>
      <AdvancedChart
        data={CandleDataMock as Array<TYahooCandleData>}
        dataAdapter="yahooFinance"
      />
    </section>
  );
}
