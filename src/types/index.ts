import { InsertProductSchema } from "@/lib/validators";
import { z } from "zod";

type ZodProductBase = z.infer<typeof InsertProductSchema>;

export interface Product extends ZodProductBase {
  id: string;
  rating: string;
  createdAt: Date;
}
