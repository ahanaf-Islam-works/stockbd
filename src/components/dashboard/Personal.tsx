import PersonalGraph from "./profile/PersonalGraph";
import Portfolio from "./profile/Portfolio";
import Transactions from "./profile/Transactions";
import { UserActionsProvider } from "@/providers/userActionsProvider";
import Market from "./Market";
import MarketValue from "./MarketValue";
import {
  RealTimeStockProps,
  userStockProps,
  graphData,
} from "@/props/realTimeStockProps";

const Personal = ({
  userStock,
  graphData,
  stocks,
}: {
  userStock: userStockProps[];
  graphData: graphData[];
  stocks: RealTimeStockProps[];
}) => {
  return (
    <UserActionsProvider>
      <div
        id="current"
        className="min-h-full shadow rounded-md lg:col-span-3 col-span-12 m-auto w-full sm:w-full p-4 order-2"
      >
        <div className="flex flex-col">
          <Market stocks={stocks} />
          <MarketValue chartdata={graphData} />
        </div>
      </div>
      <div
        id="portfolio"
        className="min-h-full shadow rounded-md lg:col-span-5 col-span-12 m-auto w-full sm:w-full p-4 order-1 md:order-3"
      >
        <div className="flex flex-col gap-4">
          <Portfolio />
          <PersonalGraph />
        </div>
      </div>
      <div
        id="previous"
        className="lg:col-span-8 col-span-12 lg:col-start-3 shadow rounded-md order-4"
      >
        <Transactions userStock={userStock} />
      </div>
    </UserActionsProvider>
  );
};

export default Personal;
