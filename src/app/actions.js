"use server";

import { cookies } from "next/headers";

export async function setCookie(data) {
    cookies().set("quizes_solved", data);
}

export async function getCookie() {
    return cookies().get("quizes_solved");
}
