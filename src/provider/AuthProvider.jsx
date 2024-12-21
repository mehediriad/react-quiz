import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

const auth = getAuth(app)
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null)
    const [authLoading, setAuthLoading] = useState(true)
    const [authError,setAuthError] = useState(null)

    

    //signup user
    const signup = (email, password) => {
        setAuthLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //update user
    const updateUser = (name) =>{
        setAuthLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    //signin user
    const signin = (email,password) =>{
        setAuthLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logout user
    const logout = () =>{
        setAuthLoading(true)
        return signOut(auth)
    }


    //observe auth state change
    useEffect(()=>{
        setAuthLoading(true)
        const unsebscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              setAuthLoading(false)
            } else {
                setUser(null)
                setAuthLoading(false)
            }
          });

          return () => unsebscribe()
    },[])
    const authInfo = {
        user,
        authLoading,
        setAuthLoading,
        signup,
        signin,
        updateUser,
        logout,
        authError,
        setAuthError
    }

   
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;