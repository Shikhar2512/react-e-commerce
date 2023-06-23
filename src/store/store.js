import {compose , legacy_createStore as createStore, applyMiddleware} from 'redux';
import { persistStore,persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import storage from 'redux-persist/lib/storage'
const middleware = [logger]    //lib helpers run before an action hits the reducer
const persistConfig = {
    key:'root',
    storage,
    blacklist:['user']
}
const persistedReducer = persistReducer(persistConfig,rootReducer);
const composedEnhancers = compose(applyMiddleware(...middleware));//apply these middlewares 
export const store = createStore(persistedReducer, undefined,composedEnhancers);
export const persister = persistStore(store);
