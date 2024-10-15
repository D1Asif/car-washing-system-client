import { baseApi } from "../../api/baseApi";

export const slotApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSlotsOfService: builder.query({
            query: (query) => ({
                url: `/slots?${query}`
            }),
            providesTags: ['Slots']
        }),
        getSlotById: builder.query({
            query: (slotId) => ({
                url: `/slots/${slotId}`
            }),
            providesTags: ['Slots']
        }),
        bookSlot: builder.mutation({
            query: (body) => ({
                url: "/bookings",
                method: 'POST',
                body
            }),
            invalidatesTags: ['Slots']
        }),
        createSlots: builder.mutation({
            query: (body) => ({
                url: "services/slots",
                method: 'POST',
                body
            }),
            invalidatesTags: ['Slots']
        }),
        updateSlotStatus: builder.mutation({
            query: (data) => ({
                url: `slots/update-status/${data.slotId}`,
                method: 'PUT',
                body: data.body
            }),
            invalidatesTags: ['Slots']
        })
    })
})

export const {
    useGetSlotsOfServiceQuery,
    useGetSlotByIdQuery,
    useBookSlotMutation,
    useCreateSlotsMutation,
    useUpdateSlotStatusMutation
} = slotApi