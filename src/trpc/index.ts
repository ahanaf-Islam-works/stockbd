import { publicProcedure, router } from "./trpc";
import { authController } from "@/controllers/authController";
import { latestStock } from "@/controllers/latestStockController";

export const appRouter = router({
  authCallBack: publicProcedure.query(authController),
  getStockDataRealtime: publicProcedure.query(latestStock),
});

export type AppRouter = typeof appRouter;
