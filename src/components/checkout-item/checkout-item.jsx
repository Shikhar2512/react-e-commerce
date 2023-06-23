import './checkout-item.styles.scss';
import { addItemToCart,removeItemFromCart,clearItemFromCart, setCartQuantity } from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, selectCartQuantity } from "../../store/cart/cart.selector";
const CheckoutItem = ({ cartItem }) => {
    const {name,imageUrl,price,quantity} = cartItem;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const cartQuantity = useSelector(selectCartQuantity);
    const addItemHandler = ()=> {
       dispatch(addItemToCart(cartItem,cartItems)); 
        dispatch(setCartQuantity(cartQuantity+1));
    }
    const removeItemHandler = ()=>{
       dispatch(removeItemFromCart(cartItem,cartItems)); 
       dispatch(setCartQuantity(cartQuantity-1));
    }
    const clearItemHandler = ()=>{
        dispatch(clearItemFromCart(cartItem,cartItems));
        dispatch(setCartQuantity(cartQuantity-quantity));
    }
    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={name}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
            <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
            <span className="value">{quantity}</span>
            
            <div className="arrow" onClick={addItemHandler}>&#10095; </div></span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
}
export default CheckoutItem;