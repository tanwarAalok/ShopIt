import { RootState } from './../store';
import { createSelector } from "reselect";

import { CategoriesState } from "./category-reducer";
import { CategoryMap } from "./category-types";

const selectCategoryReducer = (state: RootState): CategoriesState => state.categories;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => categories.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector([selectCategoryReducer], (categorySlice) => categorySlice.isLoading);
