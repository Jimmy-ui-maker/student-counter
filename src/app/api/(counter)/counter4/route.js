import { LevelFour } from "@/models/Tables";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
      const get4 = await LevelFour.find({}).count();
      return NextResponse.json(get4);
    } catch (error) {
      return NextResponse.json('Result not found')
    }
  }