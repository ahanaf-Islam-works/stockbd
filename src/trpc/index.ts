import { publicProcedure, router } from "./trpc";
import { authController } from "@/controllers/authController";
import { updatedStockDatabase } from "@/controllers/stockDatabaseController";

export const appRouter = router({
  authCallBack: publicProcedure.query(authController),
  getStockDataRealtime: publicProcedure.query(updatedStockDatabase),
});

export type AppRouter = typeof appRouter;
