import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: { isEditItem: null } as {
    isEditItem: CategoryType | null;
  },
  reducers: {
    setCategoryState: (state, action) => {
      const { isEditItem } = action.payload;
      return { ...state, isEditItem };
    },
    clearCategoryState: (state, action) => {
      const { isEditItem } = action.payload;
      return { ...state, isEditItem };
    },
  },
});

export const { clearCategoryState, setCategoryState } = categorySlice.actions;
export default categorySlice.reducer;
