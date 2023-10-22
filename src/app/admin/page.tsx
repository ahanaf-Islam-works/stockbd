import Wrapper from "@/components/Wrapper";
import { Card, Grid } from "@tremor/react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import StockDatabaseUpdate from "@/components/admin/StockDatabaseUpdate";
import TotalUsers from "@/components/admin/TotalUsers";
import WebsiteRuntime from "@/components/admin/WebsiteRuntime";
import { UserCircle2 } from "lucide-react";

export default async function Page() {
  const session = await getServerSession();
  const isAdmin = session?.user.role;
  if (isAdmin) {
    redirect("/");
  }
  return (
    <Wrapper className="mt-7">
      <Grid numItemsMd={2} numItemsLg={2} className="gap-6 pb-4">
        <Card className="mb-4 ">
          <Card className="flex justify-between mb-4">
            <div>
              <h2 className="text-xl">Name: {session?.user.name}</h2>
              <h3 className="text-base text-zinc-600">
                Admin Email: {session?.user.email}
              </h3>
            </div>
            <div className="mt-4">
              <UserCircle2 size={48} />
            </div>
          </Card>
          <WebsiteRuntime />
        </Card>
        <Card className="mb-4">
          <TotalUsers />
        </Card>
      </Grid>

      <Grid numItemsMd={2} numItemsLg={3} className="gap-6 pb-4">
        <Card className="mb-5 h-full">
          <StockDatabaseUpdate
            title="Real Time Stock Data"
            queryKey="testAdmin"
            description="Update the stock database with the latest stock data"
          />
        </Card>
        <Card className="">
          <StockDatabaseUpdate
            title="Stock Graph Data"
            queryKey="testPrivate"
            description="Update the stock database with the latest stock data"
          />
        </Card>
        <Card className="">
          <StockDatabaseUpdate
            title="Total Stock Data"
            queryKey="testPublic"
            description="Update the stock database with the latest stock data"
          />
        </Card>
      </Grid>
    </Wrapper>
  );
}
