/**
 * file: root store
 * date: 2020-08-28
 * author: Frank
 * lastModify: Frank 2020-08-28
 */
import rootReducer from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import rootSaga from './rootSaga';
import createSagaMiddleware from 'redux-saga';

// create sage middleware
const sagaMiddleware = createSagaMiddleware();

// apply saga middle ware and reducer
const store = configureStore({
    reducer: rootReducer,
    middleware(getDefaultMiddleware) {
        return [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];
    },
});

//import the root saga and run this saga
sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
