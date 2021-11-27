import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApiHeaders = {

};
const baseUrl = "http://127.0.0.1:3002/api/auth";
const createRequest = (url) => ({ url, headers: authApiHeaders });
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: `/signup/${data}`,
        method: "POST",
        body: data,
      }),
    }),
    login:  builder.mutation({
      query: (data) => ({
        url: `/login`,
        method: "POST",
        body: data
      }),
    }),
    logout: builder.mutation({
      query: (data) => ({
        url: `/logout`,
        method: "DELETE",
        body: ""
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useLogin,
  useLogout,
} = authApi;
