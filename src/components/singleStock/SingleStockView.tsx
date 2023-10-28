"use client";
import { FC } from "react";
import ReactApexChart from "react-apexcharts";
import { Card } from "@tremor/react";

interface SingleStockViewProps {
  graph: Array<{ x: Date; y: Array<number> }>;
}

const SingleStockView: FC<SingleStockViewProps> = ({ graph }) => {
  const options: object = {
    chart: {
      type: "candlestick",
      height: 350,
    },
    title: {
      text: "CandleStick Chart",
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#10b981",
          downward: "#b91c1c",
        },
        wick: {
          useFillColor: true,
        },
      },
    },
  };

  const series = [{ data: graph }];
  return (
    <>
      <Card id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="candlestick"
          height={350}
        />
      </Card>
    </>
  );
};

export default SingleStockView;
