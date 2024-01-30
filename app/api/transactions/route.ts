// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Transaction } from "@prisma/client";
import { z } from "zod";
import { prisma } from "@/prisma/prisma";
import { getSession } from "@auth0/nextjs-auth0";

type Data = {
  transaction: Transaction;
};

const BodySchema = z.object({
  person: z.string().min(1).max(255),
  amount: z.number(),
});

export async function POST(request: Request) {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const session = await getSession();
  const user = session?.user;

  if (!user) {
    return new Response("Not found data user", { status: 401 });
  }

  const data = await request.json();

  const body = BodySchema.parse(data);
  const transaction = await prisma.transaction.create({
    data: {
      person: body.person,
      amount: body.amount,
      authorId: user.sid,
      createdAt: new Date(),
    },
  });

  return Response.json({ transaction });
}
