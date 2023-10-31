import {
  publicProcedure,
  router,
  adminProcedure,
  privateProcedure,
} from "./trpc";
import { authController } from "@/controllers/user/authController";
import { realtimeStockController } from "@/controllers/realtimeStockController";
import updateRealtimeStockDB from "@/controllers/updateRealtimeStockDBController";
import updateStockGraphDbController from "@/controllers/updateStockGraphDbController";
import z from "zod";
import { singleStockDataController } from "@/controllers/singleStockDataController";
import { getPersonalStocks } from "@/controllers/user/personalStocks";
import { purchaseStockController } from "@/controllers/user/purchaseStock";

export const appRouter = router({
  user: router({
    testPublic: publicProcedure.query(() => {
      return { message: "Test public" };
    }),
    authCallBack: publicProcedure.query(authController),
    // user Api (private)
    testPrivate: privateProcedure.query(() => {
      return { message: "Test private" };
    }),
    getStockDataRealtime: privateProcedure.query(realtimeStockController),
    getStockGraphData: privateProcedure.query(updateStockGraphDbController),
    getSingleStockData: privateProcedure
      .input(z.string())
      .query(({ ctx, input }) => {
        const user = ctx.user;
        if (!user) throw new Error("User not found");
        const symbol = input;
        return singleStockDataController(symbol);
      }),
    getAllPersonalStocks: privateProcedure.query(({ ctx }) => {
      const user = ctx.user;
      if (!user) throw new Error("User not found");
      return getPersonalStocks(user.id);
    }),
    purchaseStock: privateProcedure
      .input(
        z.object({
          stockId: z.string(),
          quantity: z.number(),
          userId: z.string(),
        })
      )
      .query(({ ctx, input }) => {
        const user = ctx.user;
        if (!user) throw new Error("User not found");
        const { stockId, quantity, userId } = input;
        return purchaseStockController({
          stockId,
          quantity,
          userId,
        });
      }),
  }),

  admin: router({
    testAdmin: adminProcedure.query(() => {
      return { message: "Test admin" };
    }),
    updateStockDatabase: adminProcedure.query(updateRealtimeStockDB),
  }),
});

export type AppRouter = typeof appRouter;

export type UserRouter = AppRouter["user"];
export type AdminRouter = AppRouter["admin"];
