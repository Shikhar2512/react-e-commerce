import Spinner from '../../components/loading/spinner.component';
import { Fragment } from 'react';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { CategoriesContainer } from './categories-preview.styles';
const CategoriesPreview = ({categoriesMap,isLoading}) => {
    if(!isLoading){
        return (
            <CategoriesContainer>
                {
                    Object.keys(categoriesMap).map((title) => {
                        const products = categoriesMap[title];
                        return(
                            <CategoryPreview key = {title} title={title} products={products}/>
                        )
                    })
                }
    
            </CategoriesContainer>
    
        )
    }
    else{
        return(
            <Spinner/>
        )
    }

}
export default CategoriesPreview