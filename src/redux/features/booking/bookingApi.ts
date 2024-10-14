import { baseApi } from "../../api/baseApi";

export const bookingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUsersBookings: builder.query({
            query: (query) => ({
                url: `/my-bookings?${query}`
            })
        })
    })
})

export const { useGetUsersBookingsQuery } = bookingApi