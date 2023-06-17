import { createContext, useState } from "react";
export const cartContext = createContext({
    showCartDropdown:false, 
    setShowCartDropdown:()=>null,
    cartItems: [],
    setCartItems: () => null
})
export const CartProvider = ({ children }) => {
    const [cartItems, addItemToCart] = useState([]);
    const [showCartDropdown, setShowCartDropdown] = useState(false);
    const value = { cartItems, addItemToCart,showCartDropdown, setShowCartDropdown }
    return (
        <cartContext.Provider value={value}>{children}</cartContext.Provider>
    )
}