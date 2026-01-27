import { createChartSeriesSlice } from "@/store/slices/chartSeriesSlice";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { TCombinedAppStore } from "./types";

// Combined store that works well with Redux Devtools
export const useAppStore = create<TCombinedAppStore>()(
  devtools(
    (...args) => ({
      ...createChartSeriesSlice(...args),
    }),
    { name: "CombinedAppStore" },
  ),
);
