import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { categoriesContext } from "../../components/contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import Loading from "../../components/loading/loading.component";
import { CategoryContainer, CategoryTitle } from "./category.styles";
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
                <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
                <CategoryContainer>
                    {
                        products.map((product) => {
                            return (
                                <ProductCard key={product.id} product={product} />
                            )
                        })
                    }
                </CategoryContainer>
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