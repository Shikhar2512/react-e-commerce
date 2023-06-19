import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { categoriesContext } from "../../components/contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import './category.styles.scss';
import Loading from "../../components/loading/loading.component";
const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(categoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);
    console.log(categoriesMap[category]);
    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])
    if (products) {
        return (
            <Fragment>
                <h2 className="category-title">{category.toUpperCase()}</h2>
                <div className="category-container">
                    {
                        products.map((product) => {
                            return (
                                <ProductCard key={product.id} product={product} />
                            )
                        })
                    }
                </div>
            </Fragment>

        )
    }
    else {
        return (
            <Loading />
        )
    }
}
export default Category;