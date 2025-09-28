import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    features: [
      { name: "Number System", enabled: true },
      { name: "Date Created", enabled: true },
      { name: "User Management", enabled: false },
    ],
  });
}
