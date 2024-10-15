import { baseApi } from "../../api/baseApi";

export const bookingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUsersBookings: builder.query({
            query: (query) => ({
                url: `/my-bookings?${query}`
            })
        }),
        getAllBookings: builder.query({
            query: () => ({
                url: "/bookings"
            })
        })
    })
})

export const { useGetUsersBookingsQuery, useGetAllBookingsQuery } = bookingApi