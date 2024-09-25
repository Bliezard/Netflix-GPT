import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

  const [isSignInForm, setIsSignInForm]=useState(true);

  const toggleSignInform =()=>{
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>

      <Header />
      <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg"
      />
      </div>
      <form className=" w-3/12 absolute  p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80" >
        <h1 className="font-bold text-3xl py-4">
        {isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (<input
         type="text" 
         placeholder="Full Name" 
         className="p-4 my-4 w-full  bg-gray-900 rounded-md"
        />)}
        <input 
        type="text" 
        placeholder="Email or mobile number" 
        className="p-4 my-4 w-full bg-gray-900 rounded-md"
         />
         
        <input
         type="password" 
         placeholder="Password" 
         className="p-4 my-4 w-full  bg-gray-900 rounded-md"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-md" >
        {isSignInForm ? "Sign In" : "Sign Up"}
         </button>
        <p className="py-2  cursor-pointer" onClick={toggleSignInform}> 
        {isSignInForm ? 
        <span className="text-gray-300 ">New to Netflix? Sign Up now.</span> :
        <span className="text-gray-300 ">Already registered, Sign In now!</span> }
        </p>
      </form>
    </div>
  );
}

export default Login;
