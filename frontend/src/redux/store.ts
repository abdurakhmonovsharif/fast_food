import { ordersApi } from "./rtq/orders.api";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { categoryApi } from "./rtq/category.api";
import userReducer from "./reducers/user.reducer";
import categoryReducer from "./reducers/category.reducer";
export const store = configureStore({
  reducer: {
    [ordersApi.reducerPath]: ordersApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    user: userReducer,
    category: categoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ordersApi.middleware, categoryApi.middleware),
});

setupListeners(store.dispatch);
