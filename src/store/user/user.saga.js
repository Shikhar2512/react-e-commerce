import { all,put,takeLatest,call, take } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import {signInSuccess,signInFailed } from "./user.action";
import { getCurrentUser } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

function* getUserSnapshot(user){
    
}

function* isUserAuthenticated(){
    try{
        const userAuth = call(getCurrentUser);
        if(!userAuth) return;
        
    }catch(error){

    }
}

function* onCheckUserSession(){
    yield takeLatest(USER_ACTION_TYPES.CHECK_CURRENT_USER,call(isUserAuthenticated))
}

export function* userSaga(){
    yield all([])
} 