import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";
import type { NextApiRequest } from "next";
import { hash } from "bcryptjs";
import { v2 as cloudinary } from "cloudinary";

export const config = {
  api: {
    bodyParser: true,
  },
};

cloudinary.config({
  cloud_name: "your_cloud_name",
  api_key: "your_api_key",
  api_secret: "your_api_secret",
});
export const GET = async (
  req: NextApiRequest,
  { params }: { params: { id?: string } }
) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }

    const { id } = params;
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(user);
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "An unknown error occurred";
    return NextResponse.json(
      { message: "Error fetching user", error: message },
      { status: 500 }
    );
  }
};

export const PUT = async (
  req: Request,
  { params }: { params: { id?: string } }
) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }
    const body = await req.json();

    console.log("Request body:", body);
    console.log(params.id);
    console.log(body);

    const { id } = params;
    const hashedPassword = await hash(body.password, 12);

    const updatedUser = await prisma.user.update({
      where: { id },
      data: { ...body, password: hashedPassword },
    });
    return NextResponse.json(updatedUser);
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "An unknown error occurred";
    return NextResponse.json(
      { message: "Error updating user", error: message },
      { status: 500 }
    );
  }
};

export const DELETE = async (
  req: NextApiRequest,
  { params }: { params: { id?: string } }
) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }

    const { id } = params;
    await prisma.user.delete({
      where: { id },
    });
    return NextResponse.json({ message: "User deleted successfully" });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "An unknown error occurred";
    return NextResponse.json(
      { message: "Error deleting user", error: message },
      { status: 500 }
    );
  }
};
