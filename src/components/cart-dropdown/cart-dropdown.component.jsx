import Button from "../button/button.component";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from 'react-router-dom'
import CartItem from "../cart-item/cart-item.component";
import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles";
import { selectCartItems } from "../../store/cart/cart.selector";
import { setShowCartDropdown } from "../../store/cart/cart.action";
import { useDispatch } from "react-redux";
const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const goToCheckoutHandler = ()=>{
        dispatch(setShowCartDropdown(false));
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