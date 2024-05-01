import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dictAPI = createApi({
  reducerPath: "dictAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ['dict'],
  endpoints: (builder) => ({
    fetchAllRatedCurrentOfTheMainCircuits: builder.query({
      query: () => ({
        url: "RatedCurrentOfTheMainCircuits",
      }),
    }),
    fetchData: builder.query({
      query: (url) => ({
        url,
        // body: "1",
      }),
      // providesTags: ['dict'],
      // providesTags: (result, error, arg) =>
      //   result
      //     ? [...result.map(({ id }) => ({ type: 'dict' as const, id })), 'dict']
      //     : ['dict'],
    }),



  }),
});

export const {
  useFetchAllRatedCurrentOfTheMainCircuitsQuery,
  useFetchDataQuery,

} = dictAPI;
