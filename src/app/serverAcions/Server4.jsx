"use server";
import { LevelFour } from "@/models/Tables";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addLevelFour = async (FormData) => {
  const { fullnames, matric, level, phone, desc } =
    Object.fromEntries(FormData);
  try {
    const newLvFour = new LevelFour({
      fullnames,
      matric,
      level,
      phone,
      desc,
    });
    await newLvFour.save();
  } catch (error) {
    throw new Error("Failed To Create Level Four " + error);
  }
  revalidatePath("/");
  redirect("/");
};


