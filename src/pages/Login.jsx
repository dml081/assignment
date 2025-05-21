import axios from "axios";
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
 
 const Login = ({setFirstName, setUserEmail}) => {
    const [username, setUsername] = useState("")

    const [password, setPassword] = useState("")

    const [isChecked, setIsChecked] = useState(false)

    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")


   
    const Navigate = useNavigate();




    const verify = async (e) => {
    
      try {
        e.preventDefault()

        const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });
      setTimeout(() => {
        Navigate("/")
        setLoading(false)
      }, 5000);
      // setLoading(true);
      // console.log(response);

      console.log(response);
      setFirstName(response.data.firstName);
      setUserEmail(response.data.email);
      setGender(response.data.gender);
      

      } catch(error) {
        console.error("error", error);
        // setError(true)
        setErrorMessage(error.response.data.message);

      }    
        }
  
   return (
     <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
       <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
           Login
         </h2>
           <form onSubmit={verify} className="space-y-4">
             <div>
               <label className="block text-sm font-medium text-gray-700">
                 Username
               </label>
               <input
                 type="username"
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
                 placeholder="Enter your username"
                 className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
               />
             </div>
             <div>
               <label className="block text-sm font-medium text-gray-700">
                 Password
               </label>
               <input
                 type="text"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 placeholder="Enter your password"
                 className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
               ></input>
               <div className="flex gap-80 mx-0 my-4">
                 <input type="checkbox" onChange={(e) => setIsChecked(e.target.value)}/>
               </div>
             </div>
           
               { error &&
                  <p className="text-red-500">{errorMessage}</p>}
              {/* { successMessage &&
                  <p className="text-green-400">loggedin successfully</p>} */}
             <button
               type="submit"
               className="w-full text-center flex justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
             >
             { loading? 
             (<svg
               className="animate-spin h-8 w-8 text-blue-500"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
             >
               <circle
                 className="opacity-25"
                 cx="12"
                 cy="12"
                 r="10"
                 stroke="currentColor"
                 strokeWidth="4"
               ></circle>
               <path
                 className="opacity-75"
                 fill="currentColor"
                 d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
               ></path>
             </svg>) : (" Sign In")
             }
             </button>
           </form>
         <div className="text-center mt-4 text-sm text-gray-600">
           <a href="#" className="hover:underline">
             Forgot password?
           </a>{" "}
           |
           <Link to= "/signup" className="hover:underline ml-2">
               Create an account
           </Link>
         </div>
       </div>
     </div>
   );
 };
 
 export default Login;