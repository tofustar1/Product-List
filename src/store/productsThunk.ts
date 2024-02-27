import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {GlobalError, IProduct, IRequestObj} from "../types";
import {isAxiosError} from "axios";

const fetchUniqueProductsById = async (ids: string[]) => {
  const productsData = await axiosApi.post('', {
    "action": "get_items",
    "params": {"ids": ids}
  });
  const allProducts: IProduct[] = productsData.data.result;
  const uniqueProductsMap = new Map<string, IProduct>();
  allProducts.forEach(product => {
    if (!uniqueProductsMap.has(product.id)) {
      uniqueProductsMap.set(product.id, product);
    }
  });
  return Array.from(uniqueProductsMap.values());
};

export const getProductsInfo = createAsyncThunk<IProduct[], number, {rejectValue: GlobalError}>(
    'products/getProducts',
    async (offsetPage, {rejectWithValue}) => {
      try {
        const productsIds = await axiosApi.post('',
            {
              "action": "get_ids",
              "params": {"offset": offsetPage, "limit": 50}
            });
        const allProductsId = productsIds.data.result;

        return await fetchUniqueProductsById(allProductsId);
      } catch (e) {
        if (isAxiosError(e) && e.response) {
          return rejectWithValue(e.response.data);
        }
        throw e;
      }
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