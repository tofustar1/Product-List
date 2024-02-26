import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {IProduct, IRequestObj} from "../types";

const fetchUniqueProductsById = async (ids: string[]) => {
  const productsData = await axiosApi.post('', {
    "action": "get_items",
    "params": { "ids": ids }
  });
  const allProducts : IProduct[] = productsData.data.result;
  const uniqueProductsMap = new Map<string, IProduct>();
  allProducts.forEach(product => {
    if (!uniqueProductsMap.has(product.id)) {
      uniqueProductsMap.set(product.id, product);
    }
  });
  return Array.from(uniqueProductsMap.values());
};

export const getProductsInfo = createAsyncThunk<IProduct[], number>(
    'products/getProducts',
    async (offsetPage) => {
      const productsIds = await axiosApi.post('',
          {
            "action": "get_ids",
            "params": {"offset": offsetPage,"limit": 50}
          });
      const allProductsId = productsIds.data.result;

      return await fetchUniqueProductsById(allProductsId);
    }
);

export const getProductsByFilter = createAsyncThunk<IProduct[], IRequestObj>(
    'products/getProductsByFilter',
    async ({key, value}) => {
      const productsIds = await axiosApi.post('',
          {
            "action": "filter",
            "params": {[key]: value}
          });
      const allProductsId = productsIds.data.result;

      return await fetchUniqueProductsById(allProductsId);
    }
);