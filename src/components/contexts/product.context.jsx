import { createContext ,useState } from "react";
import PRODUCTS_DATA from '../../shop-data.json';
export const productsContext = createContext({
    products:[],
    setProducts : ()=>null
});

export const ProductsProvider = ({children})=>{
    const [products,setProducts] = useState(PRODUCTS_DATA);
    const value = {products,setProducts};
    return(
        <productsContext.Provider value={value}>{children}</productsContext.Provider>
    )
}