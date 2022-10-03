import { PrismaClient } from ".prisma/client";
import type { CompatibilityEvent } from "h3";

export default async function useDB(event: CompatibilityEvent) {
  const prisma = event.context.prisma as PrismaClient;
  const cleanup = () => {
    return prisma.$disconnect();
  };
  try {
    await prisma.$connect();
    event.req.on("end", cleanup);
    event.req.on("error", cleanup);
    event.req.on("close", cleanup);
    event.req.on("pause", cleanup);
    event.req.on("resume", async () => await prisma.$connect());
    event.res.on("close", cleanup);
    event.res.on("error", cleanup);
    event.res.on("finish", cleanup);
  } catch (err) {
    console.error(err);
    // await prisma.$disconnect();
    await cleanup();
  }
  return prisma;
}
