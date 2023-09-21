import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import user from "./reducers/user";
import OrdersState from "./reducers/OrdersState";

export const store = configureStore({
  reducer: {
    orders: OrdersState,
    user: user,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

setupListeners(store.dispatch);
