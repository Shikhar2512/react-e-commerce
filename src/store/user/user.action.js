import { createAction } from "../../utils/reducer/reduct.utils";
import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user)=>{
    return createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user);//create Action and return object having the type and payload
}