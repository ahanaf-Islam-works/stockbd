"use client";
import { Card, Grid } from "@tremor/react";

const categories = [
  {
    title: "Sales",
    metric: "$ 12,699",
    metricPrev: "$ 9,456",
    delta: "34.3%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Profit",
    metric: "$ 40,598",
    metricPrev: "$ 45,564",
    delta: "10.9%",
    deltaType: "moderateDecrease",
  },
  {
    title: "Shares",
    metric: "1,072",
    metricPrev: "856",
    delta: "25.3%",
    deltaType: "moderateIncrease",
  },
];

export default function Portfolio() {
  return (
    <Grid numItemsSm={3} numItems={3} numItemsLg={3} className="gap-6">
      {categories.map((item) => (
        <Card key={item.title}>
          <p className="text-lg font-semibold text-zinc-700">{item.title}</p>
          <p className="text-xl font-semibold text-zinc-900">{item.metric}</p>
          <p className="text-sm font-semibold text-zinc-700">
            {item.metricPrev}
          </p>
          {item.deltaType === "moderateIncrease" && (
            <p className="text-sm font-semibold text-green-500">
              {item.delta} &uarr;
            </p>
          )}
          {item.deltaType === "moderateDecrease" && (
            <p className="text-sm font-semibold text-red-500">
              {item.delta} &darr;
            </p>
          )}
        </Card>
      ))}
    </Grid>
  );
}
