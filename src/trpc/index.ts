import {
  publicProcedure,
  router,
  adminProcedure,
  privateProcedure,
} from "./trpc";
import { authController } from "@/controllers/authController";
import { updateRealtimeStockDB } from "@/controllers/updateRealtimeStockDBController";

export const appRouter = router({
  authCallBack: publicProcedure.query(authController),

  // user Api (private)
  getStockDataRealtime: privateProcedure.query(() => {
    return { message: "Stock database updated" };
  }),

  // Admin api
  updateStockDatabase: adminProcedure.query(updateRealtimeStockDB),
});

export type AppRouter = typeof appRouter;
