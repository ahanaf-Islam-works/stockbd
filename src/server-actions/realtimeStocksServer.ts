import { serverClient } from "./../trpc/serverClient";

export const graphData = serverClient.user.getStockGraphData().finally(() => {
  return null;
});

const userStock = serverClient.user.testPrivate().finally();
