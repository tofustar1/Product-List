import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {X_AUTH} from "../constants";
import {IProduct} from "../types";

export const getProductsInfo = createAsyncThunk<IProduct[]>(
    'products/getInfo',
    async () => {
      const productsIds = await axiosApi.post('',
          {
            "action": "get_ids",
            "params": {"limit": 50}
          },
          {
            headers: {
              "X-Auth": X_AUTH
            }
          });
      const productsData = await axiosApi.post('',
          {
            "action": "get_items",
            "params": {"ids": productsIds.data.result}
          },
          {
            headers: {
              "X-Auth": X_AUTH
            }
          });
        return productsData.data.result;
    }
)