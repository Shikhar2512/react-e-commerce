import {compose , legacy_createStore as createStore, applyMiddleware} from 'redux';
import { persistStore,persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';
import storage from 'redux-persist/lib/storage'
const sagaMiddleware = createSagaMiddleware();
const middleware = [process.env.NODE_ENV !== 'production' && logger,sagaMiddleware].filter(Boolean)    //lib helpers run before an action hits the reducer
const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const persistConfig = {
    key:'root',
    storage:storage,
    whitelist:['cart']
}
const persistedReducer = persistReducer(persistConfig,rootReducer);
const composedEnhancers = composeEnhancer(applyMiddleware(...middleware));//apply these middlewares 
export const store = createStore(persistedReducer, undefined,composedEnhancers);
sagaMiddleware.run(rootSaga);
export const persister = persistStore(store);
