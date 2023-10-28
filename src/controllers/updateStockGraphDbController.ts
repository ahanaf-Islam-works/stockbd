import { TRPCError } from "@trpc/server";
import db from "@/db";
import { getStockGraph } from "@/utils/getStockGraphData";
const updateStockGraphDbController = async () => {
  const data = await getStockGraph();
  if (!data) {
    throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
  }

  return data;
};

export default updateStockGraphDbController;
