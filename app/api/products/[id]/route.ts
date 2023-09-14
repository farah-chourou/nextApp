import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";

interface Params {
  params: {
    id?: string;
  };
}

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  console.log('req.query:', req.query); // Log req.query to inspect it
  
  try {
    if (!req.query || typeof req.query.id !== 'string') {
      return res.status(400).json({ message: "Error deleting product", error: "Product ID is missing in the request" });
    }

    const id = Number(req.query.id);
    
    if (isNaN(id)) {
      return res.status(400).json({ message: "Error deleting product", error: "Invalid product ID" });
    }

    await prisma.product.delete({
      where: { id },
    });

    return res.json({ message: "Product deleted successfully" });
  } catch (err: any) { // Use type assertion here to specify err is of type any
    console.error('Error in DELETE route:', err);

    if (err.code === 'P2016') {
      return res.status(404).json({ message: "Error deleting product", error: "Product not found" });
    }

    return res.status(500).json({ message: "Error deleting product", error: err.message });
  }
}




export const GET = async (req: NextApiRequest, { params }: Params) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }

    const { id } = params;

    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
      include: {
        images: true,
      },
    });

    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "An unknown error occurred";
    return NextResponse.json(
      { message: "Error fetching product", error: message },
      { status: 500 }
    );
  }
};
