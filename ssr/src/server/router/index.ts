// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./products";

export const appRouter = createRouter()
	.transformer(superjson)
	.merge("products.", exampleRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
