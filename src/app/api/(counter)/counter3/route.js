import { LevelThree } from "@/models/Tables";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
      const get3 = await LevelThree.countDocuments();
      return NextResponse.json(get3);
    } catch (error) {
      return NextResponse.json('Result not found')
    }
  }