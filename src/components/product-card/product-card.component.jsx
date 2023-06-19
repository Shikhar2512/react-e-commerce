import Button from '../button/button.component';
import './product-card.styles.scss';
import { cartContext } from '../contexts/cart.context';
import { useContext } from 'react';
const ProductCard = ({product}) =>{
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(cartContext);
    const addProductToCart = (event)=>{
        addItemToCart(product);
    }
    return(
        <div className='product-card-container'>
            <img src = {imageUrl}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick = {addProductToCart}>ADD TO CART</Button>

        </div>
    )
}
export default ProductCard;