import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext("Hello");

const AuthProvider = ({ children }) => {
  // store user info to use any where
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookMarkedNews,setBookMarkedNews]=useState([])
  // const [newsBookmarkBtn,setNewsBookmarkBtn]=

  console.log("user in auth provider===> ", user);

  // creating user by email+password
  const createUserByEmailAndPasswordFromAuthProvider = (
    userEmail,
    userPassword
  ) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, userEmail, userPassword);
  };

  // Signing in by email+password
  const logInUserByEmailAndPasswordFromAuthProvider = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Observer for user login tracking
  useEffect(() => {
    // Observer to listen for user login state changes
    const unsubscribe = onAuthStateChanged(auth, (userProfile) => {
      if (userProfile) {
        setLoading(false);
        console.log("Getting user profile for you...");
        setUser(userProfile);
        console.log(userProfile);
      } else {
        console.log("User is logged out!!");
      }
    });

    // Cleanup function to unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  // Validating a password by firebase
  // const status = validateSignupPasswordByFirebase(auth,password);
  // if (!status.isValid) {
  //   // Password could not be validated. Use the status to show what
  //   // requirements are met and which are missing.

  //   // If a criterion is undefined, it is not required by policy. If the
  //   // criterion is defined but false, it is required but not fulfilled by
  //   // the given password. For example:
  //   const needsLowerCase = status.containsLowercaseLetter !== true;
  // }

  // SIGNOUT  / LOGOUT
  const logOutUser = () => {
    console.log("Log out successfull!");
    setLoading(true);
    setUser(null);
    
    return signOut(auth);
  };

  // Update a user's profile info
  const updateUserInfo=(updateUserData)=>{

    return updateProfile(auth.currentUser,updateUserData);
  }

  
  // Email verification=> working -./
  const verifyUserEmail = () => {
    if (auth.currentUser) return sendEmailVerification(auth.currentUser);
  };

  // password reset email
  const handlePassResetEmail=(email)=>{
    return sendPasswordResetEmail(auth, email)

  }
  

  // Observer setup for handling / tracking log in state, reloading problem
  
  // signing by 3rd party provider (Google)
  const googleSignIn = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    
    return signInWithPopup(auth, provider);
  };
  // signing by 3rd party provider (Github)
  const githubSignIn = () => {
    setLoading(true);
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const authInfo = {
    user,
    setUser,
    bookMarkedNews,
    setBookMarkedNews,
    loading,
    createUserByEmailAndPasswordFromAuthProvider,
    logInUserByEmailAndPasswordFromAuthProvider,
    updateUserInfo,
    // validateSignupPasswordByFirebase,
    logOutUser,
    googleSignIn,
    githubSignIn,
    verifyUserEmail,
    handlePassResetEmail
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
