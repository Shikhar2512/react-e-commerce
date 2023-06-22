import { Route,Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import { useEffect } from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import Category from "../category/category.component";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/categories.action";
import { useDispatch } from "react-redux";

const Shop = () => {
    const dispatch = useDispatch()
    const categoriesMap = useSelector(selectCategoriesMap);
    useEffect(()=>{
        const getCategory = async ()=>{
            const categoriesArray = await getCategoriesAndDocuments();
            dispatch(setCategories(categoriesArray));
        }
        getCategory();
    },[]);
     return (
        <Routes>
            <Route index element = {<CategoriesPreview categoriesMap ={categoriesMap}/>}></Route>
            <Route path=":category" element = {<Category categoriesMap = {categoriesMap}/>}></Route>
        </Routes>
     )
}
export default Shop