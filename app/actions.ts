"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "./lib/db";
import { revalidatePath } from "next/cache";

export const postData = async (formData: FormData) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error("unauthorized");
  }

  const message = formData.get("message") as string;

  await prisma.guestBookEntry.create({
    data: {
      message: message,
      userId: user.id,
    },
  });
  revalidatePath("/guestbook");
};
