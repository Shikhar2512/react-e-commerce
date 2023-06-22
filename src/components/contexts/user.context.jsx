import {useEffect, useReducer, createContext } from "react";
import { authStateChangeListner, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducer/reduct.utils";
//as the actual value we want to acces
export const UserContext = createContext(
    {
        currentUser: null,
        setCurrentUser: () => null
    }
);

const USER_ACTION_TYPES = {
    SET_CURRENT_USER:'SET_CURRENT_USER'
}

const userReducer = (state,action)=>{
    console.log('dispatch');
    console.log(action);
    const {type , payload} = action;
    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return{
                ...state,
                currentUser:payload
            }
        default :
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}  

const INITIAL_STATE = {
    currentUser:null
}
//actual conponent provides access the values
export const UserProvider = ({ children }) => {
    // const [currentUser, setCurrentUser] = useState(null);
    const [state,dispatch] = useReducer(userReducer, INITIAL_STATE)
    const {currentUser} = state;
    console.log(currentUser);
    const setCurrentUser = (user)=>{
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user));
    }
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