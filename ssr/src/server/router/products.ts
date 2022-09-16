import { createRouter } from "./context";
import { z } from "zod";

export const exampleRouter = createRouter()
	.query("get", {
		async resolve({ ctx }) {
			return await ctx.prisma.products.findMany();
		},
	})
	
