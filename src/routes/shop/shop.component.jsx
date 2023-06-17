import { useContext } from 'react';
import { productsContext } from '../../components/contexts/product.context';
import ProductCard from '../../components/product-card/product-card.component';
import './shop.styles.scss';
const Shop = () => {
    const { products } = useContext(productsContext);
    console.log(products);
    return (
        <div className='products-container'>{
            products.map((product) => {
                return (
                    <ProductCard product={product}/>
                )
            })
        }
        </div>
    )
}
export default Shop