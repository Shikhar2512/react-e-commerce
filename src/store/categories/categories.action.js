import { CartItemContainer } from "../../components/cart-item/cart-item.styles";
import { createAction } from "../../utils/reducer/reduct.utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

 const fetchCategoriesStart = ()=>createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
 const fetchCategoriesSuccess = (categoriesArray)=>createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,categoriesArray)
 const fetchCategoriesFailed = (error)=>createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,error);

export const fetchCategoriesAsync = ()=>async(dispatch)=>{
    dispatch(fetchCategoriesStart());
    try{
        const categoriesArray = await getCategoriesAndDocuments();
        dispatch(fetchCategoriesSuccess(categoriesArray));
    }
    catch(error){
        dispatch(fetchCategoriesFailed(error));
    }
}
