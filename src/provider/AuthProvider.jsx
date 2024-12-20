import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //signup user
    const signup = (email, password, name) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                if (user) {
                    updateProfile(auth.currentUser, {
                        displayName: name
                    }).then(() => {
                        setUser(user)
                        return { message: "user create successfully", status: 200, user }
                    }).catch((error) => {
                        return { message: "something went wrong", status: 400, error }
                    });
                }
            })
            .catch((error) => {
                return { message: "something went wrong", status: 400, error }
            });
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
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;