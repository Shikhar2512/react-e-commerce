import { takeLatest, all, put, call } from "redux-saga/effects";
import { fetchCategoriesSuccess, fetchCategoriesFailed} from "./categories.reducer";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments,'categories');
        yield put(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        yield put(fetchCategoriesFailed(error));
    }
}
function* onFetchCategories() {
    yield takeLatest('category/fetchCategoriesStart',fetchCategoriesAsync)
}
export function* categoriesSaga() {
    yield all([call(onFetchCategories)]);
}