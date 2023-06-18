import { useContext, useState } from "react";
import { ReactComponent as ShoppingIcon } from "../../asset/shopping-bag.svg";
import { cartContext } from "../contexts/cart.context";
import './cart-icon.styles.scss';
const CartIcon = () =>{
    const {showCartDropdown,setShowCartDropdown,cartQuantity}  = useContext(cartContext)
    const showCart =()=>{
        setShowCartDropdown(!showCartDropdown);
    }
    return(
        <div className="cart-icon-container" onClick={showCart}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{cartQuantity}</span>
        </div>
    )
}
export default CartIcon;