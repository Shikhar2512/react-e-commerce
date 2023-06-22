import {compose , legacy_createStore as createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

const middleware = [logger]    //lib helpers run before an action hits the reducer
const composedEnhancers = compose(applyMiddleware(...middleware));//apply these middlewares 
export const store = createStore(rootReducer, undefined,composedEnhancers);
