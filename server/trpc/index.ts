// ~/server/trpc/index.ts
import type { inferAsyncReturnType } from "@trpc/server";
import * as trpc from "@trpc/server";
import { CompatibilityEvent } from "h3";
import { router as user } from "./user";

export async function createContext(event: CompatibilityEvent) {
  return {
    event,
  };
}

export type NitroContext = inferAsyncReturnType<typeof createContext>;

export const router = trpc.router<NitroContext>().merge("user.", user);
