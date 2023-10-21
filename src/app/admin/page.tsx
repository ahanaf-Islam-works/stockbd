import Wrapper from "@/components/Wrapper";
import { Card, Grid } from "@tremor/react";

export default function Page() {
  const renueData = () => {};
  return (
    <Wrapper full>
      <Grid numItemsSm={3} numItems={3} numItemsLg={3} className="gap-6">
        <Card className="">hello</Card>
        <Card className="">hello</Card>
        <Card className="">hello</Card>
      </Grid>
    </Wrapper>
  );
}

// run colsole log to hello in every5 seconds
