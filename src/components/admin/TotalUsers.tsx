"use client";
import { Card, Metric, Text, CategoryBar, Legend } from "@tremor/react";

const categories = [
  {
    title: "Total users",
    metric: "10,345",
    subCategoryValues: [30, 70],
    subCategroyColors: ["emerald", "red"],
    subCategoryTitles: ["Active users", "Inactive users"],
  },
];

export default function TotalUsers() {
  return (
    <>
      {categories.map((item) => (
        <Card key={item.title}>
          <Text>{item.title}</Text>
          <Metric>{item.metric}</Metric>
          <CategoryBar
            values={item.subCategoryValues}
            colors={item.subCategroyColors}
            className="mt-4"
          />
          <Legend
            categories={item.subCategoryTitles}
            colors={item.subCategroyColors}
            className="mt-3"
          />
        </Card>
      ))}
    </>
  );
}
