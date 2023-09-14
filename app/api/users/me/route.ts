
import { getErrorResponse } from "@/libs/helpers";
import { prisma } from "@/libs/prisma";
import { verifyJWT } from "@/libs/token";
import { NextRequest, NextResponse } from "next/server";
import cookie from "cookie";

export async function GET(req: NextRequest) {
  try {
    
    const cookiesHeader = req.headers.get("Cookie");
    const cookies = cookiesHeader ? cookie.parse(cookiesHeader) : {};

    
    const token = cookies.token;

    if (!token) {
      return getErrorResponse(
        401,
        "You are not logged in, please provide token to gain access"
      );
    }

    
    const payload = await verifyJWT<{ sub: string }>(token);
    const userId = payload.sub;

    
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      return getErrorResponse(404, "User not found");
    }

    return NextResponse.json({
      status: "success",
      data: { user: { ...user, password: undefined } },
    });
  } catch (error) {
    console.error(error);
    return getErrorResponse(500, "Server error");
  }
}
