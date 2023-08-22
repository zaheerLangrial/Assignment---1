import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [isMudalOpen, setIsMudalOpen] = useState(true);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className=" shadow-md">
        <div>
          <div className="flex justify-center items-center font-bold text-2xl">
            <h1>Login</h1>
          </div>
          <div className=" mt-14">
            <input
              className="bg-gray-200 w-72 placeholder:pl-3 py-2 rounded-lg font-medium placeholder:text-gray-400"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mt-3 bg-gray-200 rounded-lg flex items-center ">
            <input
              className="bg-gray-200 w-56 placeholder:pl-3 py-2 rounded-lg   font-medium placeholder:text-gray-400"
              type="password"
              placeholder="Password"
            />
            <span className=" ml-4">
              <button className=" bg-transparent text-black font-semibold">
                Show
              </button>
            </span>
          </div>
          <div className="mt-7">
            <Link to={"/tasks"}>
              <button className="bg-black font-semibold text-white w-full rounded-lg py-2">
                Log in
              </button>
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default Login;
