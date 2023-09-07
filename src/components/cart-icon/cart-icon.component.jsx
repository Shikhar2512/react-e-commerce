import { ShoppingIcon,CartIconContainer, ItemCount } from "./cart-icon.styles";
import { setIsCartOpen } from "../../store/cart/cart.reducer";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCartQuantity} from "../../store/cart/cart.selector";
import { useDispatch } from "react-redux";
const CartIcon = () =>{
    const cartQuantity = useSelector(selectCartQuantity);
    const dispatch = useDispatch();
    const showCart =()=>{
        dispatch(setIsCartOpen());
    }
    return(
        <CartIconContainer onClick={showCart}>
            <ShoppingIcon/ >
            <ItemCount>{cartQuantity}</ItemCount>
        </CartIconContainer>
    )
}
export default CartIcon;