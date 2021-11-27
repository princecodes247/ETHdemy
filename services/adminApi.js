import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const adminApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  'x-rapidapi-key': '55866d4804mshab0b221a054569ep1df8b7jsn4d1c350a6d88',
};
const baseUrl = "/api/admin";
const createRequest = (url) => ({ url, headers: adminApiHeaders });
export const adminApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => createRequest(`/getuser`),
    }),
    getAllUsers: builder.query({
      query: () => createRequest(`/getallusers`),
    }),
    changeUserBalance:  builder.mutation({
      query: (data) => {
        url: `/changeuserbalance`,
        method: "POST",
        body: data
      },
    }),
    deactivateAccount: builder.mutation({
      query: (data) => {
        url: `/deactivateaccount`,
        method: "POST",
        body: data
      },
    }),
     toggleAutoIncrement: builder.mutation({
      query: (data) => {
        url: `/toggleautoincrement`,
        method: "POST",
        body: data
      },
    }),
  }),
});


//  COMPLETE THE EXPORTS

export const {
  useGetAllUsers,
  useGetUser,
} = adminApi;
