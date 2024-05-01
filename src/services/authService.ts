import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authAPI = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
    reducerPath: "authAPI",

    tagTypes: ['auth'],
    endpoints: (builder) => ({


        login: builder.mutation({
            query: ({ data }) => ({
                url: `/auth/login`,
                method: 'POST',
                body: { data },
            }),
            transformResponse: (response, meta, arg) => {
                return response
            },
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => response,
            invalidatesTags: ['auth'],

            async onQueryStarted(
                arg,
                { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
            ) { },
            async onCacheEntryAdded(
                arg,
                { }
            ) { },
        }),
        updateProfile: builder.mutation({
            query: ({ id, image, formData }) => {
                const bodyFormData = new FormData();
                bodyFormData.append('file', image);
                bodyFormData.append('textData', JSON.stringify(formData));
                return {
                    url: `/auth/updateProfile/${id}`,
                    method: 'PATCH',
                    body: bodyFormData,
                }
            },
            transformResponse: (response, meta, arg) => response
            ,
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => response.status,
            invalidatesTags: ['auth'],

            async onQueryStarted(
                arg,
                { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
            ) { },
            async onCacheEntryAdded(
                arg,
                { }
            ) { },
        }),
        registration: builder.mutation({
            query: ({ data }) => {

                return {
                    url: `/auth/registration`,
                    method: 'POST',
                    body: { data },
                }
            },
            transformResponse: (response, meta, arg) => response
            ,
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => {
                return response.data
            },
            invalidatesTags: ['auth'],

            async onQueryStarted(
                arg,
                { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
            ) { },
            async onCacheEntryAdded(
                arg,
                { }
            ) { },
        }),




    }),
})


export const {

    useLoginMutation,
    useUpdateProfileMutation,
    useRegistrationMutation,
} = authAPI;