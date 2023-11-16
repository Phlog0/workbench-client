import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const dictAPI = createApi({
  reducerPath: "dictAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    fetchAllOPN: builder.query({
      query: () => ({
        url: "/opn",
      }),
    }),
  }),
});

export const { useFetchAllOPNQuery } = dictAPI;
