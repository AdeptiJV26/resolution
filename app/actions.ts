// app/actions.ts
"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addResolution(formData: FormData) {
  const name = formData.get("name") as string;
  const message = formData.get("message") as string;

  if (!name || !message) return;

  try {
    await db.resolution.create({
      data: { name, message },
    });
  } catch (error) {
    console.error("Database Error:", error);
    return;
  }

  // Clear cache and send user to the board
  revalidatePath("/");
  redirect("/?view=board");
}