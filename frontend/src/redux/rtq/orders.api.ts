import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../api/api";
// const token = localStorage.getItem("user_token");
// const baseQueryHeaders = token ? { Authorization: `${token}` } : undefined;
export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    // headers: baseQueryHeaders,
  }),
  endpoints: (builder) => ({
    getOrderByColums: builder.query<ResponeOrderByColType,{ status: string; page: string; size: string }>({
      query: ({ status, page, size }) =>
        `order/byColumns?status=${status}&page=${page}&size=${size}`,
    }),
    getOrderByRow: builder.query<ResponeOrderByRowType, void>({
      query: () => `order/byRow`,
    }),
    // addTodo: builder.mutation<Todo, Partial<Todo>>({
    //     query: (newTodo) => ({
    //         url: `todos`,
    //         method: 'POST',
    //         body: newTodo,
    //     }),
    // }),
    deleteOrder: builder.mutation<void, { id: string }>({
        query: ({ id }) => ({
            url: `order/delete?orderId=${id}`,
            method: 'DELETE',
        }),
    }),
    updateOrder: builder.mutation<void, { status: string; orderId: string }>({
      query: ({ status, orderId }) => ({
        url: `order/update?orderId=${orderId}&status=${status}`,
        method: "PATCH",
      }),
    }),
  }),
});
// , useAddTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation
export const {
  useGetOrderByColumsQuery,
  useGetOrderByRowQuery,
  useUpdateOrderMutation,
  useDeleteOrderMutation
} = ordersApi;
