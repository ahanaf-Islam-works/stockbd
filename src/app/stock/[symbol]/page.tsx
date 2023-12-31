import { FC } from "react";

import Wrapper from "@/components/Wrapper";

import { serverClient } from "@/trpc/serverClient";
import dynamic from "next/dynamic";
const SingleStockView = dynamic(
  () => import("@/components/singleStock/SingleStockView"),
  {
    ssr: false,
  }
);
interface pageProps {
  params: {
    symbol: string;
  };
}

const page: FC<pageProps> = async ({ params }) => {
  // const symbol = params.symbol;
  const symbol = "IBM";
  const data = await serverClient.user.getSingleStockData(symbol);
  const graph = data.output;
  const meta = data.metaData;
  if (!graph || !meta) return <div>error</div>;
  return (
    <Wrapper full>
      <div className="shadow-lg p-3 flex gap-4 mb-4">
        <div>
          <h3>
            Price of {meta["2. Symbol"]} in {meta["6. Time Zone"]}
          </h3>
          <p>Last Refreshed : {meta["3. Last Refreshed"]}</p>
          <p>Interval: {meta["4. Interval"]}</p>
          <p>Output Size: {meta["5. Output Size"]}</p>
        </div>
        <div>
          <p></p>
        </div>
      </div>
      <div className="col-span-4">
        <SingleStockView graph={graph} />
      </div>
    </Wrapper>
  );
};

export default page;
