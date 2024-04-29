import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Observer
  useEffect(() => {
    const unsubsCribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("auth state changed user", currentUser);
      if (currentUser) {
        setUser(currentUser);
      }
      setLoading(false);
    });
    return () => {
      unsubsCribe();
    };
  }, []);

  // signIn user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signOut
  const logOut = () => {
    setLoading(true);
    setUser(null);
    signOut(auth);
  };

  // GoogleLogin
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Github Login
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };

  const info = {
    createUser,
    signIn,
    signOut,
    googleLogin,
    githubLogin,
    logOut,
    loading,
    user,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
