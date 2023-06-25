import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => state.categories;

const selectCategories = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice)=>categoriesSlice.categories
)

export const selectCategoriesMap =  
    createSelector(
    [selectCategories],
    (categories)=> categories
    .reduce((auth, category) => {
        const { title, items } = category
        auth[title.toLowerCase()] = items;
        return auth;
    }, {})
    )
export const selectCategoriesIsLoading = (state)=>state.categories.isLoading 