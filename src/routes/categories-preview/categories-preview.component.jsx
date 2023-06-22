import Loading from '../../components/loading/loading.component';
import { Fragment } from 'react';
import CategoryPreview from '../../components/category-preview/category-preview.component';
const CategoriesPreview = ({categoriesMap}) => {
    if(categoriesMap){
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
            <Loading/>
        )
    }

}
export default CategoriesPreview