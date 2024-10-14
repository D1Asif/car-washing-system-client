import { baseApi } from "../../api/baseApi";

export const slotApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
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
        bookSlot: builder.mutation({
            query: (body) => ({
                url: "/bookings",
                method: 'POST',
                body
            })
        })
    })
})

export const {
    useGetSlotsOfServiceQuery,
    useGetSlotByIdQuery,
    useBookSlotMutation
} = slotApi