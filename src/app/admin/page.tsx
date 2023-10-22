import Wrapper from "@/components/Wrapper";
import { Card, Grid } from "@tremor/react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession();
  const isAdmin = session?.user.role;
  if (isAdmin) {
    redirect("/");
  }
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
