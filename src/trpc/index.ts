import { publicProcedure, router } from "./trpc";
import { authController } from "@/controllers/authController";

export const appRouter = router({
  authCallBack: publicProcedure.query(authController),
});

export type AppRouter = typeof appRouter;
