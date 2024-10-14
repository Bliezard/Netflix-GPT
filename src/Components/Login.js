import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from '../Utils/userSlice';
import { BG_URL, USER_AVATAR } from "../Utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
  };

  const HandleButtonClick = () => {
    //  Validate our form Data
    // checkValidData(email, password);

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    //create a new user or sign up that user [sign in / Sign up]
    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, 
            photoURL:USER_AVATAR,
          }).then(() => {
            // Profile updated!
            // ...
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL,}));
            // navigate("/browse");
          }).catch((error) => {
            // An error occurred
            // ...
            setErrorMessage(error.message);
          });
          
         // console.log(user);
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+ "-"+ errorMessage);
          // ..
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // console.log(user);
    // navigate("/browse");
    
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ "-"+ errorMessage);
  });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img 
        src={BG_URL}
        alt="Logo" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-3/12 absolute  p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full  bg-gray-900 rounded-md"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email or mobile number"
          className="p-4 my-4 w-full bg-gray-900 rounded-md"
        />

        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full  bg-gray-900 rounded-md"
        />

        <p className="text-red-700 text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-md"
          onClick={HandleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2  cursor-pointer" onClick={toggleSignInform}>
          {isSignInForm ? (
            <span className="text-gray-300 ">New to Netflix? Sign Up now.</span>
          ) : (
            <span className="text-gray-300 ">
              Already registered, Sign In now!
            </span>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
