import Button from "../button/button.component";
import './cart-dropdown.styles.scss';
import { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { cartContext } from "../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
const CartDropdown = () => {
    const { cartItems } = useContext(cartContext)
    const navigate = useNavigate();
    const goToCheckoutHandler = ()=>{
        navigate('/checkout');
    }
    console.log(cartItems);
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {
                    cartItems.map((cartItem) => {
                        return (
                            <CartItem product={cartItem} />
                        )
                    })
                }
            </div>
         
                <Button onClick = {goToCheckoutHandler}>GO TO CHECKOUT</Button>
       

        </div>
    )
}
export default CartDropdown;