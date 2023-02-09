import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createWrapper } from 'next-redux-wrapper'
import rootReducer from "./root-reducer";


export const store = configureStore({
    reducer: rootReducer,
},)

const makeStore = () => store
export const wrapper = createWrapper(makeStore)