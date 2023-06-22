import Button from "../button/button.component";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { cartContext } from "../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles";
const CartDropdown = () => {
    const { cartItems,setShowCartDropdown } = useContext(cartContext)
    const navigate = useNavigate();
    const goToCheckoutHandler = ()=>{
        setShowCartDropdown(false);
        navigate('/checkout');
    }
    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    (cartItems.length?cartItems.map((cartItem) => {
                        return (
                            <CartItem product={cartItem} />
                        )
                    }):<EmptyMessage>Your cart is empty</EmptyMessage>)
                    
                }
            </CartItems>
         
                <Button onClick = {goToCheckoutHandler} buttonType='base'>GO TO CHECKOUT</Button>
       

        </CartDropdownContainer>
    )
}
export default CartDropdown;