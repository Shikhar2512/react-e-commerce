import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
    isLoading: false,
    categories: [],
    error: null
}

const categoriesSlice = createSlice({
    name: 'category',
    initialState: INITIAL_STATE,
    reducers: {
        fetchCategoriesStart(state, action) {
            state.isLoading = true;
        },
        fetchCategoriesSuccess(state, action) {
            state.isLoading = false;
            state.categories = action.payload;
        },
        fetchCategoriesFailed(state, action) {
            state.isLoading = true;
            state.error = null;
        }
    }
})

export const {
    fetchCategoriesStart,
    fetchCategoriesSuccess,
    fetchCategoriesFailed
} = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;

// export const categoriesReducer = (state = INITIAL_STATE,action = {})=>{
//     const {type,payload} = action;
//     switch(type){
//         case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
//             return{
//                 ...state,isLoading:true
//             }
//         case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
//             return{
//                 ...state,categories:payload,isLoading:false

//             }
//         case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
//             return {
//                 ...state,isLoading:false,error:payload
//             }
//         default:
//             return state
//     }
// }