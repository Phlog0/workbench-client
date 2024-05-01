import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const projectsApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
    reducerPath: "projectAPI",

    tagTypes: ['Projects', 'Shkafs'],
    endpoints: (builder) => ({
        fetchAllProjects: builder.query({
            query: (url) => ({
                url
            }),
            providesTags: ['Projects'],
        }),


        fetchProject: builder.query({
            query: (url) => ({
                url
            }),
            providesTags: (result, error, arg) => {
                console.log(result)
                const parsedResult = [...result.nodes, ...result.edges]

                // if (parsedResult.length > 0) {

                return parsedResult
                    ? [...parsedResult.map(({ id }) => ({ type: 'Shkafs' as const, id })), { type: 'Shkafs' }]
                    : [{ type: 'Shkafs' }]


            },
            transformResponse: (response: { data: Post }, meta, arg) => response,
            // Pick out errors and prevent nested properties in a hook or selector
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => response,


        }),



        addShkaf: builder.mutation({
            // note: an optional `queryFn` may be used in place of `query`
            query: ({ projectId, ...newShkafId }) => ({
                url: `/addShkaf/${projectId}`,
                method: 'POST',
                body: newShkafId,
            }),
            transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => response.status,
            invalidatesTags: ['Shkafs'],

        }),
        addStencil: builder.mutation({
            // note: an optional `queryFn` may be used in place of `query`
            query: ({ projectId, imageFile, stencilId }) => {
                const bodyFormData = new FormData();
                bodyFormData.append('file', imageFile);
                bodyFormData.append('stencilId', stencilId);
                return {

                    url: `/addStencil/${projectId}`,
                    method: 'POST',
                    // headers: {
                    //     'Content-Type': 'multipart/form-data;'
                    // },
                    body: bodyFormData
                }
            },
            transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => response.status,
            invalidatesTags: ['Shkafs'],

        }),
        resizeStencil: builder.mutation({
            // note: an optional `queryFn` may be used in place of `query`
            query: ({ stencilId, style, position }) => {

                return {

                    url: `/resizeStencil/${stencilId}`,
                    method: 'PATCH',

                    body: { style, position }
                }
            },
            transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => response.status,
            invalidatesTags: ['Shkafs'],

        }),


        deleteShkaf: builder.mutation({
            query: ({ shkafId, type }) => ({
                url: `/deleteShkaf/${shkafId}`,
                method: 'DELETE',
                body: { type }
            }),
            transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => response.status,
            invalidatesTags: ['Shkafs'],
        }),




        updateCoords: builder.mutation({
            // note: an optional `queryFn` may be used in place of `query`
            query: ({ id, position, type }) => ({
                url: `/updateCoords/${id}`,
                method: 'PATCH',
                body: { id, position, type },
            }),
            transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => response.status,
            invalidatesTags: ['Shkafs'],
        }),
        updateGroup: builder.mutation({
            // note: an optional `queryFn` may be used in place of `query`
            query: ({ projectId, items }) => ({
                url: `/updateGroup/${projectId}`,
                method: 'PATCH',
                body: { items },
            }),
            transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => response.status,
            invalidatesTags: ['Shkafs'],
        }),
        updateGroupAfterDelete: builder.mutation({
            // note: an optional `queryFn` may be used in place of `query`
            query: ({ projectId, delShkafId, items }) => ({
                url: `/updateGroupAfterDelete/${projectId}`,
                method: 'PATCH',
                body: { items, delShkafId },
            }),
            transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => response.status,
            invalidatesTags: ['Shkafs'],

        }),
        updatePropsByRow: builder.mutation({
            // note: an optional `queryFn` may be used in place of `query`
            query: ({ shkafId, type, updatedProps }) => ({
                url: `/updatePropsByRow/${shkafId}`,
                method: 'PATCH',
                body: { type, updatedProps },
            }),
            transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => response.status,
            invalidatesTags: ['Shkafs'],

        }),
        updateCurrentProp: builder.mutation({
            // note: an optional `queryFn` may be used in place of `query`
            query: (updatedProp) => ({
                url: `/updateCurrentProp/${updatedProp.id}`,
                method: 'PATCH',
                body: { ...updatedProp },
            }),
            transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => response.status,
            invalidatesTags: ['Shkafs'],

        }),
        updateCurrentSelect: builder.mutation({
            // note: an optional `queryFn` may be used in place of `query`
            query: (data) => ({
                url: `/updateCurrentSelect/${data.id}`,
                method: 'PATCH',
                body: { ...data },
            }),
            transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => response.status,
            invalidatesTags: ['Shkafs'],

        }),
        setInitialProps: builder.mutation({
            // note: an optional `queryFn` may be used in place of `query`
            query: ({ id, data }) => ({
                url: `/setInitialProps/${id}`,
                method: 'PATCH',
                body: { data },
            }),
            transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => response.status,
            invalidatesTags: ['Shkafs'],

        }),
        createNewProject: builder.mutation({
            // note: an optional `queryFn` may be used in place of `query`
            query: ({ id, projectName, tireCount, voltage, info }) => ({
                url: `/createNewProject/${id}`,
                method: 'POST',
                body: { projectName, tireCount, voltage, info },
            }),
            transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => response.status,
            invalidatesTags: ['Projects'],

        }),
        importProject: builder.mutation({
            // note: an optional `queryFn` may be used in place of `query`
            query: ({ projectId, newItems }) => ({
                url: `/importProject/${projectId}`,
                method: 'PATCH',
                body: { newItems },
            }),
            transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => response.status,
            invalidatesTags: ['Shkafs'],

        }),
        deleteProject: builder.mutation({
            // note: an optional `queryFn` may be used in place of `query`
            query: ({ id }) => ({
                url: `/deleteProject/${id}`,
                method: 'DELETE',

            }),
            transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => response.status,
            invalidatesTags: ['Projects'],

        }),
        updateProject: builder.mutation({
            // note: an optional `queryFn` may be used in place of `query`
            query: ({ id,
                projectTitle,
                projectInfo, }) => ({
                    url: `/updateProject/${id}`,
                    method: 'PATCH',
                    body: {
                        projectTitle,
                        projectInfo,
                    }

                }),
            transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => response.status,
            invalidatesTags: ['Projects'],

        }),



        //====================================== REACT-FLOW PROPS (COORDS, GROUP, PARENTS) ======================================


        //длина шины + зацепка
        updateTireWidthAddFastener: builder.mutation({
            // note: an optional `queryFn` may be used in place of `query`
            query: ({ id,
                tireId, newTireWidth, newFastener, otherTiresRightIds,
                numberWidth,
            }) => ({
                url: `/updateTireWidthAddFastener`,
                method: 'PATCH',
                body: {
                    tireId, newTireWidth, newFastener, otherTiresRightIds,
                    numberWidth
                }

            }),
            transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => response.status,
            invalidatesTags: ['Shkafs'],

        }),
        updateTireWidthRemoveFastener: builder.mutation({
            // note: an optional `queryFn` may be used in place of `query`
            query: ({ id,
                tireId, newTireWidth, fastenerId, childShkafId, otherTiresRightIds,
                numberWidth,
            }) => ({
                url: `/updateTireWidthRemoveFastener`,
                method: 'PATCH',
                body: {
                    tireId, newTireWidth, fastenerId, childShkafId, otherTiresRightIds,
                    numberWidth,
                }

            }),
            transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => response.status,
            invalidatesTags: ['Shkafs'],

        }),
        addFastenerRelationship: builder.mutation({
            // note: an optional `queryFn` may be used in place of `query`
            query: ({
                id, updatedShkafProps,
            }) => ({
                url: `/addFastenerRelationship`,
                method: 'PATCH',
                body: {
                    id, updatedShkafProps
                }

            }),
            transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => response.status,
            invalidatesTags: ['Shkafs'],

        }),
        removeFastenerRelationship: builder.mutation({
            // note: an optional `queryFn` may be used in place of `query`
            query: ({
                removedProps,
            }) => ({
                url: `/removeFastenerRelationship`,
                method: 'PATCH',
                body: {
                    removedProps
                }

            }),
            transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => response.status,
            invalidatesTags: ['Shkafs'],

        }),
        updateSamoproverka: builder.mutation({
            // note: an optional `queryFn` may be used in place of `query`
            query: ({
                tireId, value, prop,
            }) => ({
                url: `/updateSamoproverka`,
                method: 'PATCH',
                body: {
                    tireId, value, prop
                }

            }),
            transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => response.status,
            invalidatesTags: ['Shkafs'],

        }),
        addEdgeApi: builder.mutation({
            // note: an optional `queryFn` may be used in place of `query`
            query: ({ id, source, target, projectId }) => ({
                url: `/addEdgeApi`,
                method: 'POST',
                body: { id, source, target, projectId }

            }),
            transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => response.status,
            invalidatesTags: ['Shkafs'],

        }),
        removeEdgeApi: builder.mutation({
            // note: an optional `queryFn` may be used in place of `query`
            query: ({ id }) => ({
                url: `/removeEdgeApi`,
                method: 'DELETE',
                body: { id }

            }),

            invalidatesTags: ['Shkafs'],

        }),




    }),
})


export const {

    useFetchAllProjectsQuery,
    useFetchProjectQuery,
    useAddShkafMutation,
    useAddStencilMutation,
    useResizeStencilMutation,
    useDeleteShkafMutation,
    useUpdateCoordsMutation,
    useUpdateGroupMutation,
    useUpdateGroupAfterDeleteMutation,
    useUpdatePropsByRowMutation,
    useUpdateCurrentPropMutation,
    useUpdateCurrentSelectMutation,
    useSetInitialPropsMutation,
    useCreateNewProjectMutation,
    useImportProjectMutation,
    useDeleteProjectMutation,
    useUpdateProjectMutation,
    //

    useUpdateTireWidthAddFastenerMutation,
    useUpdateTireWidthRemoveFastenerMutation,
    useAddFastenerRelationshipMutation,
    useRemoveFastenerRelationshipMutation,


    useUpdateSamoproverkaMutation,



    //EDGE
    useAddEdgeApiMutation,
    useRemoveEdgeApiMutation,

} = projectsApi;