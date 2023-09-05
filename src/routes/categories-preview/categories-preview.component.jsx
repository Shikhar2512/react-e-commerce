import Spinner from '../../components/loading/spinner.component';
import { Fragment } from 'react';
import CategoryPreview from '../../components/category-preview/category-preview.component';
const CategoriesPreview = ({categoriesMap,isLoading}) => {
    if(!isLoading){
        return (
            <Fragment>
                {
                    Object.keys(categoriesMap).map((title) => {
                        const products = categoriesMap[title];
                        return(
                            <CategoryPreview key = {title} title={title} products={products}/>
                        )
                    })
                }
    
            </Fragment>
    
        )
    }
    else{
        return(
            <Spinner/>
        )
    }

}
export default CategoriesPreview