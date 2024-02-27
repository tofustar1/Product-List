import {createSlice} from "@reduxjs/toolkit";
import {getProductsByFilter, getProductsInfo} from "./productsThunk";
import {GlobalError, IProduct} from "../types";
import {RootState} from "../app/store";

interface ProductsSlice {
  items: IProduct[];
  loading: boolean;
  error: null | GlobalError;
}

const initialState: ProductsSlice = {
  items: [],
  loading: false,
  error: null
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(getProductsInfo.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getProductsInfo.fulfilled, (state, {payload}) => {
          state.loading = false;
          state.items = payload;
        })
        .addCase(getProductsInfo.rejected, (state, {payload: error}) => {
          state.loading = false;
          state.error = error || null;
        });
    builder
        .addCase(getProductsByFilter.pending, (state) => {
          state.loading = true;
        state.error = null;
        })
        .addCase(getProductsByFilter.fulfilled, (state, {payload}) => {
          state.loading = false;
          state.items = payload;
        })
        .addCase(getProductsByFilter.rejected, (state) => {
          state.loading = false;
        });
  }
});


export const productsReducer = productsSlice.reducer;
export const selectProducts = (state: RootState) => state.products.items;
export const selectLoading = (state: RootState) => state.products.loading;
export const selectError = (state: RootState) => state.products.error;