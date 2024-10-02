import React from 'react';
import { useNavigate } from 'react-router-dom';
import {onAuthStateChanged, signOut } from 'firebase/auth';
import {auth} from "../Utils/firebase";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from "../Utils/userSlice";
import { useEffect } from 'react';
import { LOGO } from '../Utils/constants';


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store=>store.user);
  const handleSignOut = ( ) =>{
    
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
  navigate("/error");
});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties

        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return ()=>unsubscribe();
  }, []);

  return (
    <div className="absolute px-8  w-screen py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44"
      src={LOGO}
      alt="logo" />

      
      {user && <div className="flex  p-2">
        <img className="w-12 h-12 " src={user?.photoURL} alt="usericon" />
         <button onClick={handleSignOut} className="text-white font-bold ">(Sign Out)</button>
      </div>
      }
   </div>
    
  );
};

export default Header;