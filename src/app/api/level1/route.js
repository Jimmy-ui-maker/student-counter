
import { NextResponse } from "next/server";
import { LevelOne} from "@/models/Tables";

export async function POST(req) {
  try {
    
    const { fullnames, matric, level, phone, desc } = await req.json();
    await LevelOne.create({ fullnames, matric, level, phone, desc, });
    return NextResponse.json({ message: "User registered." }, { status: 201 });

  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}


export async function GET(req) {
  try {
    const get1 = await LevelOne.find();
    return NextResponse.json(get1);
  } catch (error) {
    return NextResponse.json('Result not found')
  }
}
