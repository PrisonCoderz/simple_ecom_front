import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "config";
import { getCookie } from "@/actions/auth";

export const STATUSES = {
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
}

const productSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
    }
})

export const fetchProduct = createAsyncThunk('product/fetch',
    async () => {
        const res = await axios.get(`${API}/products`)
        return res.data
    }
)

export default productSlice.reducer