// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Transaction } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { prisma } from "@/prisma/prisma";
import { getSession } from "@auth0/nextjs-auth0";

type Data = {
  transaction: Transaction;
};

const BodySchema = z.object({
  person: z.string().min(1).max(255),
  amount: z.number(),
  authorId: z.string(),
});

export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function POST(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.method);

  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  const { user } = await getSession();

  if (!user) {
    res.status(401).end();
    return;
  }

  const body = BodySchema.parse(req.body);
  const transaction = await prisma.transaction.create({
    data: {
      person: body.person,
      amount: body.amount,
      authorId: user.sid,
      createdAt: new Date(),
    },
  });

  res.status(200).json({ transaction });
}
