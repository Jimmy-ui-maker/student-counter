import { LevelFour, LevelOne, LevelThree, LevelTwo } from "@/models/Tables";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { matric } = await req.json();
    const user1 = await LevelOne.findOne({ matric }).select("_id");
    const user2 = await LevelTwo.findOne({ matric }).select("_id");
    const user3 = await LevelThree.findOne({ matric }).select("_id");
    const user4 = await LevelFour.findOne({ matric }).select("_id");
    const user = { user1, user2, user3, user4 };

    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
