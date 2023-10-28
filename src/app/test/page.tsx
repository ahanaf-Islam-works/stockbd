import Wrapper from "@/components/Wrapper";
import SingleStockView from "@/components/singleStock/SingleStockView";
import { serverClient } from "@/trpc/serverClient";

const page = async () => {
  const data = await serverClient.user.getSingleStockData("IBM");
  const graph = data.output;
  const meta = data.metaData;
  return (
    <Wrapper full>
      <div className="text-zinc-700 col-span-2">
        <h3>
          Price of {meta["2. Symbol"]} in {meta["6. Time Zone"]}
        </h3>
      </div>
      <div className="col-span-4">
        <SingleStockView graph={graph} />
      </div>
    </Wrapper>
  );
};

export default page;
