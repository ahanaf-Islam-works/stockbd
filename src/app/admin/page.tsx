import Wrapper from "@/components/Wrapper";
import { Card, Grid } from "@tremor/react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import StockDatabaseUpdate from "@/components/admin/StockDatabaseUpdate";

export default async function Page() {
  const session = await getServerSession();
  const isAdmin = session?.user.role;
  if (isAdmin) {
    redirect("/");
  }
  return (
    <Wrapper>
      <h2>{session?.user.name}</h2>
      <h3>{session?.user.email}</h3>
      <Grid
        numItemsSm={1}
        numItems={3}
        numItemsLg={3}
        numItemsMd={2}
        className="gap-6"
      >
        <Card className="">
          <StockDatabaseUpdate
            title="Update Stocks"
            queryKey="updateStockDatabase"
          />
        </Card>
        <Card className="">hello</Card>
        <Card className="">hello</Card>
      </Grid>
    </Wrapper>
  );
}
