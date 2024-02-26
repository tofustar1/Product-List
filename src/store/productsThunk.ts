import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {IProduct} from "../types";

export const getProductsInfo = createAsyncThunk<IProduct[], number>(
    'products/getInfo',
    async (offsetPage) => {
      const productsIds = await axiosApi.post('',
          {
            "action": "get_ids",
            "params": {"offset": offsetPage,"limit": 50}
          });
      const allProductsId = productsIds.data.result;

      const productsData = await axiosApi.post('',
          {
            "action": "get_items",
            "params": {"ids": allProductsId}
          }
          );
      const allProducts : IProduct[] = productsData.data.result;

      const uniqueProductsMap = new Map();
      allProducts.forEach(product => {
        if (!uniqueProductsMap.has(product.id)) {
          uniqueProductsMap.set(product.id, product);
        }
      });

      return Array.from(uniqueProductsMap.values());
    }
)