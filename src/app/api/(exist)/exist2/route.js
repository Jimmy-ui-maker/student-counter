import {LevelTwo} from "@/models/Tables";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { matric } = await req.json();
    const user = await LevelTwo.findOne({ matric }).select("_id");

    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}