import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <>
      <div className="min-h-screen bg-img bg-orange-200 flex justify-center items-center">
        <div className="bg-yellow-100 p-10 rounded-lg shadow-xl w-72 sm:w-auto sm:h-auto">
            
            {/* <img src="./retro.png" height={150} width={150} className=" absolute z-10 top-20 object-cover"/>  */}
          <h1 className="flex justify-center items-center  font-semibold text-2xl mb-5">
            Log In
          </h1>
          <input
            className="w-full h-10 sm:h-12 p-3 mb-4 rounded outline-none placeholder-slate-500"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full h-10 sm:h-12 p-3 mb-4 rounded outline-none placeholder-slate-500"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            // onClick={handleRegister}
            className="w-full h-10 sm:h-12  p-2 mb-3 bg-yellow-300 rounded hover:bg-yellow-200"
          >
            <p className="font-medium">
              Log in
            </p>
          </button>

          <Link to="/register" className="anchor mt-2">
                Click here to register
              </Link>
            
        </div>

        
      </div>
    </>
  );
};

export default Login;
