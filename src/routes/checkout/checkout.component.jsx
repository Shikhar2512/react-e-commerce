import './checkout.styles.jsx';
import { cartContext } from '../../components/contexts/cart.context';
import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles.jsx';
const Checkout = () => {
    const { cartItems} = useContext(cartContext);
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