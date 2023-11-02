import { Grid, Col, Text, Metric } from "@tremor/react";

import { Card, Title, AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 22",
    SemiAnalysis: 250,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 1500,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 2562,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3201,
  },
  {
    date: "May 22",
    SemiAnalysis: 2369,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 4536,
  },
];

const Chart = () => {
  return (
    <AreaChart
      className="h-72 mt-4"
      data={chartdata}
      index="date"
      categories={["SemiAnalysis"]}
      colors={["cyan"]}
    />
  );
};

export default function PersonalGraph() {
  return (
    <Grid numItems={1} numItemsSm={1} numItemsLg={1} className="gap-2">
      <Col numColSpan={1} numColSpanLg={1}>
        <Card>
          <Title>Personal Graph</Title>
          <Chart />
        </Card>
      </Col>
    </Grid>
  );
}
