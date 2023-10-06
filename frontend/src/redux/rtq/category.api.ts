import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../api/api";
const baseQueryHeaders = {
  Authorization: `Bearer ${""}`,
};

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getCategory: builder.query<ResponseGetCategory, void>({
      query: () => `category`,
    }),
    addCategory: builder.mutation<CategoryType, Partial<CategoryType>>({
      query: (newCategory) => ({
        url: `category`,
        method: "POST",
        body: newCategory,
      }),
    }),
    deleteCategory: builder.mutation<void, { id: string }>({
      query: ({ id }) => ({
        url: `category/delete`,
        method: "DELETE",
        params: {
          id,
        },
      }),
    }),
    updateCategory: builder.mutation<void, Partial<CategoryType>>({
      query: (data) => ({
        url: `category`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});
export const {
  useGetCategoryQuery,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} = categoryApi;
