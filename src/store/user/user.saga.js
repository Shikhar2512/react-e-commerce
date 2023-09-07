import { all, put, takeLatest, call } from "redux-saga/effects";
import { signInSuccess, signInFailed, signUpSuccess, signUpFailed, signOutSuccess, signOutFailed, resetFields } from "./user.reducer";
import { getCurrentUser } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword, createAuthUserWithEmailAndPassword,signOutUser } from "../../utils/firebase/firebase.utils";

// export const checkCurrentUser = ()=>{
//     return createAction(USER_ACTION_TYPES.CHECK_CURRENT_USER);
// }
// export const googleSignInStart = ()=>{
//     return createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);
// }
// export const emailSignInStart = (email,password)=>{
//     return createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START,{email,password});
// }
// export const signInSuccess = (user)=>{
//     return createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS,user);
// }
// export const signInFailed = (error)=>{
//     return createAction(USER_ACTION_TYPES.SIGN_IN_FAILED,error);
// }
// export const signUpStart = (email,password,displayName)=>{
//     return createAction(USER_ACTION_TYPES.SIGN_UP_START,{email,password,displayName});
// }
// export const signUpSuccess = (user,displayName)=>{
//     console.log(1);
//     return createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS,{user,displayName});
// }
// export const signUpFailed = (error)=>{
//     return createAction(USER_ACTION_TYPES.SIGN_UP_FAILED,error);
// }
// export const signOutStart = ()=>{
//     return createAction(USER_ACTION_TYPES.SIGN_OUT_START);
// }
// export const signOutSuccess = ()=>{
//     return createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);
// }
// export const signOutFailed = (error)=>{
//     return createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED,error)
// }



function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
        try {
        const userSnapShot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
        yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
    } catch (error) {
        put(signInFailed(error));
    }   
}

function* signInWithGoogle() {
    try {
        const { user } = yield call(signInWithGooglePopup);
        yield call(getSnapshotFromUserAuth, user);
    }
    catch (error) {
        if (error.code === "auth/popup-closed-by-user") {
            console.log(error, "auth/popup-closed-by-user", " in signInWithGoogle")
        }
        yield put(signInFailed(error))
    }
}

function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield call(signInAuthUserWithEmailAndPassword, email, password);
        yield call(getSnapshotFromUserAuth, user);
    }
    catch (error) {
        yield put(signInFailed(error))
    }
}

function* signUp({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield call(createAuthUserWithEmailAndPassword,email,password);
        yield put(signUpSuccess({user,displayName}));
    }
    catch (error) {
        yield put(signUpFailed(error));
    }
}

function* signOut(){
    try{
        yield call(signOutUser);
        yield put(signOutSuccess());
    }catch(error){
        yield put(signOutFailed(error))
    }
}

function* signInAfterSignUp({payload:{user,displayName}}){
    yield call(getSnapshotFromUserAuth,user,{displayName});
}

function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if (!userAuth){
            yield put(resetFields());
            return;  
        } 
        yield call(getSnapshotFromUserAuth, userAuth)
    } catch (error) {
        yield put(signInFailed(error))
    }
}

function* onCheckUserSession() {
    yield takeLatest('user/checkCurrentUser', isUserAuthenticated)
}

function* onGoogleSignInStart() {
    yield takeLatest('user/googleSignInStart', signInWithGoogle)
}

function* onEmailSignInStart() {
    yield takeLatest('user/emailSignInStart', signInWithEmail)
}

function* onSignUpStart() {
    yield takeLatest('user/signUpStart', signUp);
}

function* onSignUpSuccess(){
    yield takeLatest('user/signUpSuccess',signInAfterSignUp)
}

function* onSignOutStart(){
    yield takeLatest('user/signOutStart',signOut)
}
export function* userSaga() {
    yield all([
        call(onCheckUserSession),
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onSignOutStart)
    ])
} 