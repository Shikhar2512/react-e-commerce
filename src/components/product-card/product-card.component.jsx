import Button from '../button/button.component';
import './product-card.styles.jsx';
import { cartContext } from '../contexts/cart.context';
import { useContext } from 'react';
import { Footer, ProductCardContainer, ProductName, ProductPrice } from './product-card.styles.jsx';
const ProductCard = ({product}) =>{
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(cartContext);
    const addProductToCart = (event)=>{
        addItemToCart(product);
    }
    return(
        <ProductCardContainer>
            <img src = {imageUrl}/>
            <Footer>
                <ProductName>{name}</ProductName>
                <ProductPrice>{price}</ProductPrice>
            </Footer>
            <Button buttonType='inverted' onClick = {addProductToCart}>ADD TO CART</Button>

        </ProductCardContainer>
    )
}
export default ProductCard;