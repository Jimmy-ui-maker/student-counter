
import { AllLevelTable } from "@/models/AllTables";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const newBody = await AllLevelTable.create(body);

    return NextResponse.json(
      { message: "User registered.", newBody },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    const fetch = await AllLevelTable.find();
    return NextResponse.json(fetch);
  } catch (error) {
    return NextResponse.json("Result not found");
  }
}
