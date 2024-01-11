"use server";
import { LevelFour } from "@/models/Tables";
import { refresh } from "aos";
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
  refresh();
  redirect("/");
};

export const updateLevelFour = async (FormData) => {
  const { id, fullnames, matric, level, phone, desc } =
    Object.fromEntries(FormData);
  try {
    const updateFields = {
      fullnames,
      matric,
      level,
      phone,
      desc,
    };
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
    await LevelFour.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    throw new Error("Failed To Update Level Four " + error);
  }
  revalidatePath("/");
  redirect("#admin-cards");
};

export const deleteLevelFour = async (FormData) => {
  const { id } = Object.fromEntries(FormData);
  try {
    await LevelFour.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Failed To Delete Level Four " + error);
  }
  revalidatePath("/");
};
