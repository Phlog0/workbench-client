import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const dictAPI = createApi({
//   reducerPath: "dictAPI",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
//   endpoints: (build) => ({
//     fetchAllOPN: build.query({
//       query: () => ({
//         url: "opn",
//       }),
//     }),
//   }),
// });

// export const { useFetchAllOPNQuery } = dictAPI;

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

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useFetchAllOPNQuery } = dictAPI;
