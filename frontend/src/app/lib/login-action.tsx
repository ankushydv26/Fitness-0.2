"use server"
export async function loginAction(prevState:any,formData: any) {
    const STRAPI_URL = process.env.STRAPI_URL;
    const url = `${STRAPI_URL}/api/auth/local`;
    console.log(url , "s")
    const validatedFields = {
        email: formData.get("email"),
        password: formData.get("password"),
      }
    console.log(validatedFields)
    const {email , password} = validatedFields
    console.log(email)
    try {
      const response  = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application.json'
        },
        body: JSON.stringify({user:{email, password}}),
        cache: "no-cache",
      })

      console.log(response)
      
    } catch (error) {
      throw error
    }
    return 1
}