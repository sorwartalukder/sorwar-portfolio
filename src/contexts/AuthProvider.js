import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import app from "../firebase/firebase.confiq";


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const loginWithGoogle = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            setUser(currentUser)
            // console.log(currentUser)
        });
        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        loginWithGoogle,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;