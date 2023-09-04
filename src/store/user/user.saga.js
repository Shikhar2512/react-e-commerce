import { all, put, takeLatest, call } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import { signInSuccess, signInFailed, signUpSuccess, signUpFailed, signOutSuccess, signOutFailed } from "./user.action";
import { getCurrentUser } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword, createAuthUserWithEmailAndPassword,signOutUser } from "../../utils/firebase/firebase.utils";
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
        yield put(signUpSuccess(user,displayName));
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
    console.log(3,user,displayName);
    yield call(getSnapshotFromUserAuth,user,{displayName});
}

function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if (!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth)
    } catch (error) {
        yield put(signInFailed(error))
    }
}

function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_CURRENT_USER, isUserAuthenticated)
}

function* onGoogleSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

function* onEmailSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

function* onSignUpStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

function* onSignUpSuccess(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS,signInAfterSignUp)
}

function* onSignOutStart(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START,signOut)
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