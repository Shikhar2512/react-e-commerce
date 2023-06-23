import './checkout.styles.jsx';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles.jsx';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector.js';
const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const total = cartItems.reduce((acc,cartItem)=> acc+cartItem.price*cartItem.quantity,0);
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {
                cartItems.map((cartItem)=>{
                    return(<CheckoutItem key ={cartItem.id} cartItem={cartItem}/>)
                })
            }
            <Total>Total : &#36;{total}</Total>
        </CheckoutContainer>
    )
}
export default Checkout;