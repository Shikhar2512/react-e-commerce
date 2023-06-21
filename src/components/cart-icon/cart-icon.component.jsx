import { useContext, useState } from "react";
import { cartContext } from "../contexts/cart.context";
import { ShoppingIcon,CartIconContainer, ItemCount } from "./cart-icon.styles";
const CartIcon = () =>{
    const {showCartDropdown,setShowCartDropdown,cartQuantity}  = useContext(cartContext)
    const showCart =()=>{
        setShowCartDropdown(!showCartDropdown);
    }
    return(
        <CartIconContainer onClick={showCart}>
            <ShoppingIcon/ >
            <ItemCount>{cartQuantity}</ItemCount>
        </CartIconContainer>
    )
}
export default CartIcon;