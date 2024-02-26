import {createSlice} from "@reduxjs/toolkit";
import {getProductsInfo} from "./productsThunk";
import {IProduct} from "../types";
import {RootState} from "../app/store";

interface ProductsSlice {
  items: IProduct[];
  loading: boolean;
  error: null;
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
        .addCase(getProductsInfo.rejected, (state) => {
          state.loading = false;
        })
  }
});


export const productsReducer = productsSlice.reducer;
export const selectProducts = (state: RootState) => state.products.items;
export const selectLoading = (state: RootState) => state.products.loading;