import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  
  reducerPath: 'api',
  
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  
  endpoints: (builder) => ({
    addToBuilder: builder.mutation({
      query: (data) => ({
        url: "/add-to-builder",
        method: "POST",
        body: data,
      }),
    }),
  }),
  
})


export const { useAddToBuilderMutation } = apiSlice