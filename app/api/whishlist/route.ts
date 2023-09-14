import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { userId, productId } = req.body;

      const favoriteItem = await prisma.favouriteItem.create({
        data: {
          userId,
          productId,
        },
      });

      res.status(201).json(favoriteItem);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  if (req.method === "GET") {
    try {
      const { userId } = req.query;

      const favoriteItems = await prisma.favouriteItem.findMany({
        where: {
          userId: userId as string,
        },
        include: {
          product: true,
        },
      });

      res.status(200).json(favoriteItems);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
};
