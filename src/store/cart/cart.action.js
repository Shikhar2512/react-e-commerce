import { createAction } from "../../utils/reducer/reduct.utils";
import { CART_ACTION_TYPES } from "./cart.types";
export const setCartItems = (cartItems) => 
    createAction(CART_ACTION_TYPES.SET_CARTITEMS,cartItems)

export const setCartQuantity = (value) => 
    createAction(CART_ACTION_TYPES.SET_CART_QUANTITY,value)

export const setShowCartDropdown = (showCartDropdown) => 
    createAction(CART_ACTION_TYPES.SET_SHOW_CART_DROPDOWN,showCartDropdown )

export const addItemToCart = (productToAdd,cartItems) => {
    const isProductToAddExist = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    if (isProductToAddExist) {
        return setCartItems(cartItems.map((cartItem) => {
            return (cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
        }))
    }
    return setCartItems([...cartItems, { ...productToAdd, quantity: 1 }]);
}
export const removeItemFromCart = (productToRemove,cartItems) => {
    if (productToRemove.quantity === 1) {
        const newCartItems = cartItems.filter((cartItem) => (cartItem.id !== productToRemove.id));
        return setCartItems(newCartItems);
    }
    const newCartItems = cartItems.map((cartItem) => {
        return (cartItem.id === productToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
    })
    return setCartItems(newCartItems)
}
export const clearItemFromCart = (productToRemove,cartItems) => {
    const newCartItems = cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
    return setCartItems(newCartItems)
}