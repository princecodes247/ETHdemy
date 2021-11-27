import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import authHeader from "./authHeader"
const baseUrl = "http://127.0.0.1:3002/api/user";
const createRequest = (url) => ({ url, headers: authHeader() });
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: (id) => createRequest(`/dashboard/${id}`),
    }),
    getHistory: builder.query({
      query: () => createRequest(`/history`),
    }),
    deposit: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`/deposit`),
    }),
    withdraw: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`/withdraw`),
    }),
    updateSettings: builder.query({
      query: () => createRequest(`/updateSettings`),
    }),
    addWithdrawalAccount: builder.query({
      query: () => createRequest(`/addAccount`),
    }),
  }),
});

export const {
  useGetUserDetailsQuery,
  useGetHistoryQuery
} = userApi;
