//generate store object that we will use in our react application 
import { persistStore, persistReducer } from 'redux-persist';
import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
const sagaMiddleware = createSagaMiddleware();
const middleWares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(Boolean)    //lib helpers run before an action hits the reducer
// const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart']
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
// const composedEnhancers = composeEnhancer(applyMiddleware(...middleware));//apply these middlewares 

export const store = configureStore(
    {

        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(
            {
                serializableCheck: false
            }
        ).concat(middleWares),
        devTools: (process.env.NODE_ENV !== 'production' &&
            window &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    }
)
// export const store = createStore(persistedReducer, undefined,composedEnhancers);
sagaMiddleware.run(rootSaga);
export const persister = persistStore(store);
