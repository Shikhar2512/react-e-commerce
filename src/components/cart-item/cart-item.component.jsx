import { ItemDetails, ItemImage, ItemName,CartItemContainer } from "./cart-item.styles";

const CartItem = ({ product }) => {
    const { name, imageUrl, price,quantity } = product;
    return (
        <CartItemContainer>
            <ItemImage src={imageUrl} alt={name} />
            <ItemDetails>
                <ItemName>{name}</ItemName>
                <span className='price'>{`${quantity} x $${price}`}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}
export default CartItem;
