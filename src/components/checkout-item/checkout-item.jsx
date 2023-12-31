import './checkout-item.styles.scss';
import { addItemToCart,removeItemFromCart,clearItemFromCart } from "../../store/cart/cart.reducer";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
const CheckoutItem = ({ cartItem }) => {
    const {name,imageUrl,price,quantity} = cartItem;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const addItemHandler = ()=> {
       dispatch(addItemToCart(cartItem,cartItems)); 
        
    }
    const removeItemHandler = ()=>{
       dispatch(removeItemFromCart(cartItem,cartItems)); 
       
    }
    const clearItemHandler = ()=>{
        dispatch(clearItemFromCart(cartItem,cartItems));
        
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