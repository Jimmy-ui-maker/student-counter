import { LevelOne } from "@/models/Tables";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
      const get1 = await LevelOne.countDocuments();
      return NextResponse.json(get1);
    } catch (error) {
      return NextResponse.json('Result not found')
    }
  }