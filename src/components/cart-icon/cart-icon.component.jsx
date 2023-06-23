import { ShoppingIcon,CartIconContainer, ItemCount } from "./cart-icon.styles";
import { setShowCartDropdown } from "../../store/cart/cart.action";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCartQuantity, selectShowCartDropddown } from "../../store/cart/cart.selector";
import { useDispatch } from "react-redux";
const CartIcon = () =>{
    const cartQuantity = useSelector(selectCartQuantity);
    const showCartDropdown = useSelector(selectShowCartDropddown);
    const dispatch = useDispatch();
    const showCart =()=>{
        dispatch(setShowCartDropdown(!showCartDropdown));
    }
    return(
        <CartIconContainer onClick={showCart}>
            <ShoppingIcon/ >
            <ItemCount>{cartQuantity}</ItemCount>
        </CartIconContainer>
    )
}
export default CartIcon;