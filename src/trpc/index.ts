import {
  publicProcedure,
  router,
  adminProcedure,
  privateProcedure,
} from "./trpc";
import { authController } from "@/controllers/authController";
import { realtimeStockController } from "@/controllers/realtimeStockController";
import { updateRealtimeStockDB } from "@/controllers/updateRealtimeStockDBController";

export const appRouter = router({
  testPublic: publicProcedure.query(() => {
    return { message: "Test public" };
  }),
  authCallBack: publicProcedure.query(authController),

  // user Api (private)
  testPrivate: privateProcedure.query(() => {
    return { message: "Test private" };
  }),
  getStockDataRealtime: privateProcedure.query(realtimeStockController),

  // Admin api
  testAdmin: adminProcedure.query(() => {
    return { message: "Test admin" };
  }),
  updateStockDatabase: adminProcedure.query(updateRealtimeStockDB),
});

export type AppRouter = typeof appRouter;
