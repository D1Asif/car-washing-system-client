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
        getSlotsOfService: builder.query({
            query: (query) => ({
                url: `/slots?${query}`
            })
        }),
        getSlotById: builder.query({
            query: (slotId) => ({
                url: `/slots/${slotId}`
            })
        }),
    })
})

export const { useGetAllServicesQuery, useGetServiceByIdQuery, useGetSlotsOfServiceQuery, useGetSlotByIdQuery } = serviceApi