import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
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

  // signOut
  const signOut = () => {
    setLoading(true);
    setUser(null);
    signOut(auth);
  };
  // Observer
  useEffect(() => {
    const unsubsCribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("auth state changed user", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubsCribe();
    };
  }, []);

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

  // signIn user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const info = {
    createUser,
    signIn,
    signOut,
    googleLogin,
    githubLogin,
    loading,
    user,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
