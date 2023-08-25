import { all,call,put,takeLatest } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import { authStateChangeListner,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
function* onAuthStateChange(){
    yield takeLatest(USER_ACTION_TYPES.SET_CURRENT_USER,)
}

function* setCurrentUserAsync(){
    const unsubcribe = authStateChangeListner((user) => { //this is tied with the currentUser when ever changed it will trigger 
        if (user) {
          createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));
      })
      return unsubcribe;
}
export function* userSaga(){
    yield all([])
}