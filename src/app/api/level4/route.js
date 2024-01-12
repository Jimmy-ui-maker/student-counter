import { NextResponse } from "next/server";
import { LevelFour} from "@/models/Tables";

export async function POST(req) {
  try {
    const { fullnames, matric, level, phone, desc } = await req.json();
    await LevelFour.create({ fullnames, matric, level, phone, desc });
    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}