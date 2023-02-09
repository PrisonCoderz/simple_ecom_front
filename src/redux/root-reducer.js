import { combineReducers } from "@reduxjs/toolkit";
import productReducer from './slices/product/productSlice'

const rootReducer = combineReducers({
 product: productReducer,
})

export default rootReducer; 