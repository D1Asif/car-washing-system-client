import { baseApi } from "../../api/baseApi";

export const serviceApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllServices: builder.query({
            query: (queryString) => ({
                url: `/services?${queryString}`
            })
        }),
        getServiceById: builder.query({
            query: (serviceId) => ({
                url: `/services/${serviceId}`
            })
        }),
        createNewService: builder.mutation({
            query: (body) => ({
                url: "/services",
                method: 'POST',
                body
            })
        })
    })
})

export const {
    useGetAllServicesQuery,
    useGetServiceByIdQuery,
    useCreateNewServiceMutation
} = serviceApi