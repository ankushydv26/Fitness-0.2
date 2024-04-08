"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function registerAction(prevState: any, formData: any) {
  const STRAPI_URL = process.env.STRAPI_URL;
  // if (!STRAPI_URL) throw new Error("Please set STRAPI_URL environment variable");
  const url = `${STRAPI_URL}/api/auth/local/register`;
  const validateFormData = {
    username: formData.get("username"),
    password: formData.get("password"),
    identifier: formData.get("identifier"),
  };

  const { username, password, identifier } = validateFormData;
  try {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, identifier, password }),
      cache:'no-cache', // *default, no-store, reload, force-cache, only-if-cached
    });
    //Check status of the response
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    //Parse data and return it as json
    const data = await response.json();
    console.log(data);
    if(response.ok && data.jwt) cookies().set('jwt' , data.jwt)
  } catch (error) {
    console.log(error);
    return { error: "Server error please try again later." };
  }

  return redirect("/dashboard");
}
