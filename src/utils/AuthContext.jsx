import { useState, useContext, useEffect, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(false);

    useEffect(() => {
        setLoading(false)
    }, [])

    const loginUser = (userInfo) => {}
    const logOutUser = () => {}
    const registerUser =(userInfo) => {}
    const checkUserStatus = () => {}

    const contextData = {
        user,
        loginUser,
        registerUser,
        logOutUser,
    }

    return( <AuthContext.Provider value={contextData}>
        {loading ? <p>loading.....</p> : children}
    </AuthContext.Provider>)
} 

export const useAuth = () => {return useContext(AuthContext)}

export default AuthContext;