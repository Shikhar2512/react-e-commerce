import {useEffect, useState, createContext } from "react";
import { authStateChangeListner, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

//as the actual value we want to acces
export const UserContext = createContext(
    {
        currentUser: null,
        setCurrentUser: () => null
    }
);


//actual conponent provides access the values
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };
    useEffect(()=>{
        const unsubcribe = authStateChangeListner((user)=>{ //this is tied with the currentUser when ever changed it will trigger 
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);   
        })
        return unsubcribe;
    },[])
    return (
        // wrap the component that need acces tot the values
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}