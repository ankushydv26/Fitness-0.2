"use server"
export async function loginAction(prevState:any,formData: any) {
    const STRAPI_URL = process.env.STRAPI_URL;
    const url = `${STRAPI_URL}/api/auth/local`;
    console.log(url , "s")
    const validatedFields = {
        identifier: formData.get("identifier"),
        password: formData.get("password"),
      }
    console.log(validatedFields)
    const {identifier , password} = validatedFields
    console.log(identifier)
    try {
      const response  = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({identifier, password}),
        cache: "no-cache",
      })
      if (!response.ok) throw  new Error('HTTP error! status: ${response.status}');
      const respons = await response.json();
      console.log(respons)
      
    } catch (error) {
      console.log(error);
      throw error
    }
    return 1
}