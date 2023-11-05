export declare interface RealTimeStockProps {
  id: Number;
  name: string;
  lastTradedPrice: string;
  priceChange: string;
  changeSymbol: string;
  changePercentage: string;
}

export declare interface graphData {
  index: string;
  "value of stocks": number;
  "price of stocks": string;
}

export interface userStockProps {
  id: number;
  name: string;
  price: number;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  userId: string;
}

export type userContextProps = {
  currentMarket: {
    stocks: RealTimeStockProps[]; // Define an array of RealTimeStockProps for stocks
  } | null;
};
