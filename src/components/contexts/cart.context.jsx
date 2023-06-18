import { createContext, useState } from "react";
export const cartContext = createContext({
    cartQuantity: 0,
    showCartDropdown: false,
    setShowCartDropdown: () => null,
    cartItems: [],
    addItemToCart: () => null,
    setCartQuantity: () => null,
    removeItemFromCart: () => null,
    clearItemFromCart: () => null
})
export const CartProvider = ({ children }) => {
    const [cartQuantity, setCartQuantity] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [showCartDropdown, setShowCartDropdown] = useState(false);
    const addItemToCart = (productToAdd) => {
        console.log(2, productToAdd);
        const isProductToAddExist = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
        setCartQuantity(cartQuantity + 1);
        if (isProductToAddExist) {
            return setCartItems(cartItems.map((cartItem) => {
                return (cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
            }))
        }
        return setCartItems([...cartItems, { ...productToAdd, quantity: 1 }]);
    }
    const removeItemFromCart = (productToRemove) => {
        setCartQuantity(cartQuantity - 1);

        if (productToRemove.quantity === 1) {
            console.log(1);
            return setCartItems(cartItems.filter((cartItem) => (cartItem.id !== productToRemove.id)))
        }

        return setCartItems(
            cartItems.map((cartItem) => {
                return (cartItem.id === productToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
            })
        )



    }
    const clearItemFromCart = (productToRemove) => {
        setCartQuantity(cartQuantity - productToRemove.quantity);
        setCartItems(
            cartItems.filter((cartItem) => {
                return (
                    cartItem.id !== productToRemove.id
                )
            }
            )
        )

    }
    const value = { cartQuantity, setCartQuantity, cartItems, addItemToCart, removeItemFromCart, clearItemFromCart, showCartDropdown, setShowCartDropdown }
    return (
        <cartContext.Provider value={value}>{children}</cartContext.Provider>
    )
}