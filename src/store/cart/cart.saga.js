import { all,put,call,takeLatest } from "redux-saga/effects";
import { addItemToCart, clearItemFromCart, removeItemFromCart, setIsCartOpen } from "./cart.reducer";

// addItemToCart(state,action){
//     state.cartItems = addCartItem(state.cartItems,action.payload);
//   },
//   removeItemFromCart(state,action){
//     state.cartItems = removeCartItem(state.cartItems,action.payload);
//   },
//   clearItemFromCart(state,action){
//     state.cartItems = clearCartItem(state.cartItems,action.payload);
//   },
//   setIsCartOpen(state,action){
//     state.isCartOpen = !state.isCartOpen;
//   } 
function* onSetIsCartOpen(){
    // yield put(setIsCartOpen)
    yield takeLatest('cart/setIsCartOpen',call(setIsCartOpen))
}
function* onClearItemFromCart(){
    yield takeLatest('cart/clearItemFromCart',call(clearItemFromCart))
}
function* onRemoveItemFromCart(){
    yield takeLatest('cart/removeItemFromCart',call(removeItemFromCart))
}
function* onAddItemToCart(){
    yield takeLatest('cart/addItemToCart',call(addItemToCart))
}
export function* cartSaga (){
    yield all[call(onAddItemToCart),call(onClearItemFromCart),call(onRemoveItemFromCart),call(onSetIsCartOpen)];
}