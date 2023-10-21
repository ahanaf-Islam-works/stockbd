import { publicProcedure, router } from "./trpc";
import { authController } from "@/controllers/authController";
import { updateStockDatabase } from "@/controllers/stockDatabaseController";

export const appRouter = router({
  authCallBack: publicProcedure.query(authController),
  getStockDataRealtime: publicProcedure.query(updateStockDatabase),
});

export type AppRouter = typeof appRouter;
