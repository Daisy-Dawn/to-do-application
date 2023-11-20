import { useState, useContext, useEffect, createContext } from "react";
import {account} from "../appwrite/config"
import { ID } from "appwrite";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        checkUserStatus();
    }, [])

    const loginUser = async (userInfo) => {
        setLoading(true);
        try {
            let response = await account.createEmailSession(userInfo.email, userInfo.password);
            let accountDetails = await account.get();
            setUser(accountDetails);
        } catch(err) {
            console.error(err);
        }

        setLoading(false);
    }
    const logOutUser = () => {
        account.deleteSession('current')
        setUser(null)
    }
    const registerUser = async (userInfo) => {
        setLoading(true);
        try {
          let response = await account.create(
            ID.unique(),
            userInfo.email,
            userInfo.password,
            userInfo.name
          );
      
          await account.createEmailSession(userInfo.email, userInfo.password);
          let accountDetails = await account.get();
          setUser(accountDetails);
          navigate('/');
        } catch (err) {
          console.error(err);
        }
      
        setLoading(false);
      };
    const checkUserStatus = async () => {
        try{
            let accountDetails = await account.get()
            setUser(accountDetails);

        } catch(err) {

        }

        setLoading(false)
    }

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