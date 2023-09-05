import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContainer, CategoryTitle } from "./category.styles";
import Spinner from "../../components/loading/spinner.component";
const Category = ({categoriesMap,isLoading}) => {
    const { category } = useParams();
    const [products, setProducts] = useState(categoriesMap[category]);
    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])
    if (!isLoading) {
        return (
            <Fragment>
                <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
                <CategoryContainer>
                    {
                        products?products.map((product) => {
                            return (
                                <ProductCard key={product.id} product={product} />
                            )
                        }):<Spinner/>
                    }
                </CategoryContainer>
            </Fragment>

        )
    }
    else {
        return (
            <Spinner />
        )
    }
}
export default Category;