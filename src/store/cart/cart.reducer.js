import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
    cartQuantity: 0,
    showCartDropdown: false,
    cartItems: []
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    console.log(action , payload);
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
            return state

    }
}