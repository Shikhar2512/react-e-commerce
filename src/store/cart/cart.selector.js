import { createSelector } from "reselect";
const selectCartReducer = (state)=>state.cart;
export const  selectShowCartDropddown = (state)=> state.cart.showCartDropdown;
export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart)=>cart.cartItems
);
export const selectCartQuantity = (state) => state.cart.cartQuantity;
export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems)=> cartItems.reduce((acc,cartItem)=> acc+cartItem.price*cartItem.quantity,0)
);