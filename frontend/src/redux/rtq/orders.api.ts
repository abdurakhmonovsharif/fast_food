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
    getOrderByColums: builder.query<ResponeOrderByColType, void>({
      query: () => `order/byColumns`,
    }),
    // addTodo: builder.mutation<Todo, Partial<Todo>>({
    //     query: (newTodo) => ({
    //         url: `todos`,
    //         method: 'POST',
    //         body: newTodo,
    //     }),
    // }),
    // deleteTodo: builder.mutation<void, { id: string, user_id: string }>({
    //     query: ({ id, user_id }) => ({
    //         url: `todos/${id}`,
    //         method: 'DELETE',
    //         body: { user_id }
    //     }),
    // }),
    // updateTodo: builder.mutation<void, { id: string, data: Partial<Todo> }>({
    //     query: ({ id, data }) => ({
    //         url: `todos/${id}`,
    //         method: 'PUT',
    //         body: data,
    //     }),
    // }),
  }),
});
// , useAddTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation
export const { useGetOrderByColumsQuery } = ordersApi;
