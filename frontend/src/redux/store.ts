import { ordersApi } from "./rtq/orders.api";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    ordersApi.middleware
  ),
});

setupListeners(store.dispatch);
