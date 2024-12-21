import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

const auth = getAuth(app)
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //signup user
    const signup = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //update user
    const updateUser = (name) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    //signin user
    const signin = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logout user
    const logout = () =>{
        setLoading(true)
        return signOut(auth)
    }


    //observe auth state change
    useEffect(()=>{
        setLoading(true)
        const unsebscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              setLoading(false)
            } else {
                setUser(null)
                setLoading(false)
            }
          });

          return () => unsebscribe()
    },[])
    const authInfo = {
        user,
        loading,
        signup,
        signin,
        updateUser,
        logout
    }

   
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;