import { createSlice } from "@reduxjs/toolkit";
const ordersSlice = createSlice({
  name: "orders",
  initialState: { viewStatus: false },
  reducers: {
    setOrdersStates: (state, action) => {
      const { viewStatus } = action.payload;
      return { ...state, viewStatus };
    },
    clearOrderStates: () => {
      return { viewStatus: false };
    },
  },
});

export const { clearOrderStates, setOrdersStates } = ordersSlice.actions;
export default ordersSlice.reducer;
