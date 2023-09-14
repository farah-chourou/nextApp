import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const response = new NextResponse(JSON.stringify({ status: "success" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });

  await Promise.all([
    response.cookies.set({
      name: "token",
      value: "",
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: -1,
    }),
    response.cookies.set({
      name: "logged-in",
      value: "",
      secure: process.env.NODE_ENV !== "development",
      maxAge: -1,
    }),
  ]);

  return response;
}
