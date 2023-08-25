import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/categories.selector";
import Category from "../category/category.component";
// import { fetchCategoriesAsync } from "../../store/categories/categories.action";
import { useDispatch } from "react-redux";
import { fetchCategoriesStart} from "../../store/categories/categories.action";
const Shop = () => {
    const dispatch = useDispatch()
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    useEffect(() => {
        dispatch(fetchCategoriesStart())
    }, [dispatch]);
    return (
        <Routes>
            <Route index element={<CategoriesPreview categoriesMap={categoriesMap} isLoading={isLoading} />}></Route>
            <Route path=":category" element={<Category categoriesMap={categoriesMap} isLoading={isLoading} />}></Route>
        </Routes>
    )
}
export default Shop