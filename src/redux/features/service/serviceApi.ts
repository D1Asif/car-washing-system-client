import { baseApi } from "../../api/baseApi";

export const serviceApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllServices: builder.query({
            query: (queryString) => ({
                url: `/services?${queryString}`
            }),
            providesTags: ['Services']
        }),
        getServiceById: builder.query({
            query: (serviceId) => ({
                url: `/services/${serviceId}`
            }),
            providesTags: ['Services']
        }),
        createNewService: builder.mutation({
            query: (body) => ({
                url: "/services",
                method: 'POST',
                body
            }),
            invalidatesTags: ['Services']
        }),
        updateService: builder.mutation({
            query: (data) => ({
                url: `/services/${data.serviceId}`,
                method: 'PUT',
                body: data.body
            }),
            invalidatesTags: ({ serviceId }) => [{ type: 'Services', id: serviceId }]
        }),
        deleteService: builder.mutation({
            query: (serviceId) => ({
                url: `/services/${serviceId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ({ serviceId }) => [{ type: 'Services', id: serviceId }]
        })
    })
})

export const {
    useGetAllServicesQuery,
    useGetServiceByIdQuery,
    useCreateNewServiceMutation,
    useUpdateServiceMutation,
    useDeleteServiceMutation
} = serviceApi