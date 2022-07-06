import {configureStore, combineReducers} from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
// import counterReducer from './counterSlice'
import themeReducer from './themeSlice'
import productReducer from './ProductSlice';

const rootReducer = combineReducers({
    // counter: counterReducer,
    theme: themeReducer,
    products: productReducer
})

const store = configureStore({
    reducer: rootReducer,
    
})

export default store;