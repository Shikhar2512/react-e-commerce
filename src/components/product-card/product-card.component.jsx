import Button from '../button/button.component';
import './product-card.styles.jsx';
import { Footer, ProductCardContainer, ProductName, ProductPrice } from './product-card.styles.jsx';
import { addItemToCart, setCartQuantity } from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, selectCartQuantity } from '../../store/cart/cart.selector';
const ProductCard = ({product}) =>{
    const {name, price, imageUrl} = product;
    const cartItems = useSelector(selectCartItems);
    const cartQuantity = useSelector(selectCartQuantity);
    const dispatch = useDispatch();
    const addProductToCart = ()=>{
        dispatch(addItemToCart(product,cartItems));
        dispatch(setCartQuantity(cartQuantity+1));
    }
    return(
        <ProductCardContainer>
            <img src = {imageUrl} alt = {name}/>
            <Footer>
                <ProductName>{name}</ProductName>
                <ProductPrice>{price}</ProductPrice>
            </Footer>
            <Button buttonType='inverted' onClick = {addProductToCart}>ADD TO CART</Button>

        </ProductCardContainer>
    )
}
export default ProductCard;