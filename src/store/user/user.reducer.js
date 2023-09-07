import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
    currentUser: null,
    isLoading: null,
    error: null
}

const userSLice = createSlice(
    {
        name: 'user',
        initialState: INITIAL_STATE,
        reducers: {
            resetFields(state,action){
                state = INITIAL_STATE;
            },
            checkCurrentUser(state, action) { 
                state.isLoading = true;
            },
            googleSignInStart(state, action) {
                state.isLoading = true;
            },
            emailSignInStart(state, action) {
                state.isLoading = true;
            },
            signInSuccess(state, action) {
                state.isLoading = false;
                state.currentUser = action.payload;
            },
            signInFailed(state, action) {
                state.isLoading = false;
                state.error = action.payload;
            },
            signUpStart(state, action) {
                state.isLoading = true;
            },
            signUpSuccess(state, action) {
                state.isLoading = false;
            },
            signUpFailed(state, action) {
                state.isLoading = false;
                state.error = action.payload;
            },
            signOutStart(state, action) {
                state.isLoading = true;
            },
            signOutSuccess(state, action) {
                state.isLoading = false;
                state.currentUser = null;
            },
            signOutFailed(state, action) {
                state.isLoading = false;
                state.error = action.payload;
            }
        }
    }
)

export const {
    resetFields,
    checkCurrentUser,
    googleSignInStart,
    emailSignInStart,
    signInSuccess,
    signInFailed,
    signUpStart,
    signUpSuccess,
    signUpFailed,
    signOutStart,
    signOutSuccess,
    signOutFailed
} = userSLice.actions;

export const userReducer = userSLice.reducer; 



// export const userReducer = (state = INITIAL_STATE, action) => {
//     const { type, payload } = action;
//     switch (type) {
//         case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
//             return {
//                 ...state,
//                 isLoading: false,
//                 currentUser: payload
//             };
//         case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
//             return {
//                 ...state,
//                 currentUser: null,
//                 isLoading: false
//             }
//         case USER_ACTION_TYPES.EMAIL_SIGN_IN_START:
//         case USER_ACTION_TYPES.GOOGLE_SIGN_IN_START:
//         case USER_ACTION_TYPES.SIGN_UP_START:
//             return {
//                 ...state,
//                 isLoading: true
//             }
//         case USER_ACTION_TYPES.SIGN_OUT_FAILED:
//         case USER_ACTION_TYPES.SIGN_UP_FAILED:
//         case USER_ACTION_TYPES.SIGN_IN_FAILED:
//             return {
//                 ...state,
//                 isLoading: true,
//                 error: payload
//             }
//         default:
//             return state;
//     }
// }

