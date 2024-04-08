"use client"
import { useFormState } from "react-dom";
import Link from "next/link";
import { registerAction } from "../lib/register-action";
// const  registerAction = (prevState:any, formData:any) => {
//     const data = {
//        username: formData.get('username'),
//        password: formData.get("password"),
//        identifier:formData.get("identifier")
//     }

//     console.log(data)
//     return 1
// }

const RegisterPage =() => {
    const initialState={}
  const [state, dispatch] = useFormState(registerAction , initialState)  
    return(
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold">
                        Create your account
                    </h2>
                </div>
                <form className="mt-8 space-y-8" action={dispatch}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm ">
            <div>
                <label htmlFor="username" className="pt-2 pb-1">
                  User Name
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="User Name"
                />
              </div>  
              <div>
                <label htmlFor="email-address" className="pt-2 pb-1">
                  Email address
                </label>
                <input
                  id="identifier"
                  name="identifier"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="pt-2 pb-1">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
  
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm ">
                  Remember me
                </label>
              </div>
  
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>
  
            <div>
              <button
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
          </form>
            </div>
        </div>
    )
}

export default  RegisterPage;