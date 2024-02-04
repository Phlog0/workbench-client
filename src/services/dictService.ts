import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dictAPI = createApi({
  reducerPath: "dictAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
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
    }),
  }),
});

export const {
  useFetchAllRatedCurrentOfTheMainCircuitsQuery,
  useFetchDataQuery,
} = dictAPI;
