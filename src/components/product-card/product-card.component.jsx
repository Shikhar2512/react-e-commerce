import Button from '../button/button.component';
import './product-card.styles.jsx';
import { Footer, ProductCardContainer, ProductName, ProductPrice } from './product-card.styles.jsx';
import { addItemToCart } from '../../store/cart/cart.reducer';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems} from '../../store/cart/cart.selector';
const ProductCard = ({product}) =>{
    const {name, price, imageUrl} = product;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const addProductToCart = ()=>{
        dispatch(addItemToCart(product,cartItems));
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