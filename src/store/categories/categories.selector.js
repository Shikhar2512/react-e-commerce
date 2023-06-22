export const selectCategoriesMap = (state) =>
    state.categories.categories
        .reduce((auth, category) => {
            const { title, items } = category
            auth[title.toLowerCase()] = items;
            return auth;
        }, {})