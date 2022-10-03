import * as trpc from "@trpc/server";
import { z } from "zod"; //  yup/superstruct/zod/myzod/custom
import useDB from "../utils/useDB";
import type { NitroContext } from "./index";
import argon2 from "phc-argon2";
export const router = trpc
  .router<NitroContext>()
  .query("getUsers", {
    async resolve(req) {
      console.log("getting users");
      const prisma = await useDB(req.ctx.event);
      const users = await prisma.user.findMany();
      return users;
    },
  })
  .mutation("createUser", {
    // validate input with Zod
    input: z.object({
      username: z.string().min(5),
      password: z.string().transform<string>(async (value) => {
        return await argon2.hash(value);
      }),
    }),
    async resolve(req) {
      console.log("prisma is creating user", req.input);
      const prisma = await useDB(req.ctx.event);
      console.log("prisma.user.create", prisma.user.create);
      return await prisma.user.create({ data: req.input });
    },
  });
