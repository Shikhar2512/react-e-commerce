import { createAction } from "../../utils/reducer/reduct.utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const setCategories = (categoriesArray)=>{
    return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES,categoriesArray);//create Action and return object having the type and payload
}