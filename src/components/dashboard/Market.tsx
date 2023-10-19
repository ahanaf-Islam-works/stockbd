import StockSlider from "./StockSlider";

import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";

export default function Market() {
  return (
    <div className="flex flex-col">
      <StockSlider />
    </div>
  );
}
