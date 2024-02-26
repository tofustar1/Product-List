import {createSlice} from "@reduxjs/toolkit";

interface ProductsSlice {

}

const initialState: ProductsSlice = {

}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

  }
});


export const productsReducer = productsSlice.reducer;