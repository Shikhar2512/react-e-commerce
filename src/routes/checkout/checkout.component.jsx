import './checkout.styles.scss';
import { cartContext } from '../../components/contexts/cart.context';
import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item';
const Checkout = () => {
    const { cartItems} = useContext(cartContext);
    const total = cartItems.reduce((acc,cartItem)=> acc+cartItem.price*cartItem.quantity,0);
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
               
                    <span>Quantity</span>
                    
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((cartItem)=>{
                    return(<CheckoutItem key ={cartItem.id} cartItem={cartItem}/>)
                })
            }
            <span className='total'>Total : &#36;{total}</span>
        </div>
    )
}
export default Checkout;