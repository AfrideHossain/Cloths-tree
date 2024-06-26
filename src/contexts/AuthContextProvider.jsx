/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

// import auth from firebase config
import auth from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// create context
export const AuthContext = createContext();

// auth providers
const authProviderGoogle = new GoogleAuthProvider();

const AuthContextProvider = ({ children }) => {
  // states
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  // Authentication functions
  // Create user
  const userRegisterWithPass = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Login user
  const userLoginWithPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Log out user
  const userLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // sign in with google
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, authProviderGoogle);
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUserData) => {
      setUser(currentUserData);
      console.log(currentUserData);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // context values
  const contextValues = {
    user,
    loading,
    userRegisterWithPass,
    userLoginWithPass,
    userLogOut,
    loginWithGoogle,
  };
  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
