import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
 
 const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [error, setError] = useState(false);
    const [Success, setSuccess] = useState(false);

    const [showpassword, setShowPassord] = useState(false);
    const togglePassword = () => {
        setShowPassord(!showpassword);
    };
    
    const navigate = useNavigate();

    const Verity = (e) => {
        e.preventDefault();
        if ((email && password && isChecked)) {
            navigate("/homepage");
        } else {
          
            setError(true);
        }
        

    }

   return (
     <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
       <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
           Login
         </h2>
         <form onSubmit={Verity} className="space-y-4">
           <div>
             <label className="block text-sm font-medium text-gray-700">
               Email
             </label>
             <input
               type="email"
               value={email}
               onChange={(e)=> setEmail(e.target.value)}
               placeholder="Enter your email"
               className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
             />
           </div>
           <div>
             <label className="block text-sm font-medium text-gray-700">
               Password
             </label>
             <input
               type={showpassword ? "text" : "password"}
               value={password}
               onChange={(e)=> setPassword(e.target.value)}
               placeholder="Enter your password"
               className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
             />

             <p onClick={togglePassword} className="cursor-pointer">show password</p>
           </div>
           <input 
             type="checkbox"
             checked={isChecked}
             onChange={(e) => setIsChecked(e.target.value)} 
             />

           {Success && ( <p className= "text-green-600">Success</p>)}
           {error && (
            <p className="text-red-700">Please fill in all credentials</p>
            )}
           <button onClick={Verity}
             type="submit"
             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
           >
             Sign In
           </button>
         </form>
         <div className="text-center mt-4 text-sm text-gray-600">
           <a href="#" className="hover:underline">
             Forgot password?
           </a>{" "}
           |
           <Link to="/signup">
           <a href="#" className="hover:underline ml-2">
             Create an account
           </a>
           </Link>
         </div>
       </div>
     </div>
   );
 };
 
 export default Login;