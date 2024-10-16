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
        }),
        createBooking: builder.mutation({
            query: (body) => ({
                url: "/bookings",
                method: 'POST',
                body
            })
        })
    })
})

export const { useGetUsersBookingsQuery, useGetAllBookingsQuery, useCreateBookingMutation } = bookingApi