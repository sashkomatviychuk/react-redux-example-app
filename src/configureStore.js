import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-localstorage'

import rootReducer from './reducers';

export default function () {
    const engine = createEngine('redux-base-app');
    const storeMiddleware = storage.createMiddleware(engine);
    const createStoreWithMiddleWare = applyMiddleware(thunk, storeMiddleware)(createStore);
    const combined = combineReducers({
        posts: rootReducer,
    })

    const store = createStoreWithMiddleWare(
        storage.reducer(combined),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    const load = storage.createLoader(engine);
    load(store)

    return store;
}
