import { createContext, useReducer } from "react";
import { createAction } from "../../utils/reducer/reduct.utils";
export const cartContext = createContext({
    // cartQuantity: 0,
    // showCartDropdown: false,
    // setShowCartDropdown: () => null,
    // cartItems: [],
    // addItemToCart: () => null,
    // setCartQuantity: () => null,
    // removeItemFromCart: () => null,
    // clearItemFromCart: () => null
})

const CART_ACTION_TYPES = {
    SET_SHOW_CART_DROPDOWN: 'SET_SHOW_CART_DROPDOWN',
    ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
    SET_CARTITEMS: 'SET_CARTITEMS'
}

const cartReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case CART_ACTION_TYPES.SET_SHOW_CART_DROPDOWN:
            return {
                ...state,
                showCartDropdown: payload
            }
        case CART_ACTION_TYPES.SET_CARTITEMS:
            return {
                ...state,
                cartItems: payload
            }
        case CART_ACTION_TYPES.SET_CART_QUANTITY:
            return {
                ...state,
                cartQuantity: payload
            }
        default:
            throw new Error(`unhandled type ${type} in cartReducer`)
    }
}

const INITIAL_STATE = {
    cartQuantity: 0,
    showCartDropdown: false,
    cartItems: []
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    const { cartQuantity, showCartDropdown, cartItems } = state;

    const setCartItems = (cartItems) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_CARTITEMS,cartItems))
    }
    const setCartQuantity = (value) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_CART_QUANTITY,value))
    }
    const setShowCartDropdown = () => {
        dispatch(createAction(CART_ACTION_TYPES.SET_SHOW_CART_DROPDOWN,!showCartDropdown ));
    }
    const addItemToCart = (productToAdd) => {
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
            const newCartItems = cartItems.filter((cartItem) => (cartItem.id !== productToRemove.id));
            return setCartItems(newCartItems);
        }
        const newCartItems = cartItems.map((cartItem) => {
            return (cartItem.id === productToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
        })
        return setCartItems(newCartItems)
    }
    const clearItemFromCart = (productToRemove) => {
        setCartQuantity(cartQuantity - productToRemove.quantity);
        const newCartItems = cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
        setCartItems(newCartItems)

    }
    const value = { cartQuantity, setCartQuantity, cartItems, addItemToCart, removeItemFromCart, clearItemFromCart, showCartDropdown, setShowCartDropdown }
    return (
        <cartContext.Provider value={value}>{children}</cartContext.Provider>
    )
}