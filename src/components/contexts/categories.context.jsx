import { createContext ,useEffect,useState } from "react";
import { addCollectionAndDocument, getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";      
export const categoriesContext = createContext({
    categoriesMap:{},
    setCategoriesMap : ()=>null
});

export const CategoriesProvider = ({children})=>{
    const [categoriesMap,setCategoriesMap] = useState({});
    const value = {categoriesMap,setCategoriesMap};
    useEffect(()=>{
        const getCategoryMap = async ()=>{
            setCategoriesMap(await getCategoriesAndDocuments());
        }
        getCategoryMap();
    },[]);
    return(
        <categoriesContext.Provider value={value}>{children}</categoriesContext.Provider>
    );
}