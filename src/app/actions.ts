"use server"

import { cookies } from "next/headers"

export async function setThemeCookie(theme: string) {
  const cookieStore = await cookies()
  cookieStore.set("theme", theme, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/"
  })
  return { success: true }
}
