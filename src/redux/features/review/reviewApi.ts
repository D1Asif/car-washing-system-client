import { baseApi } from "../../api/baseApi";

export const reviewApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createReview: builder.mutation({
            query: (body) => ({
                url: "/reviews",
                method: 'POST',
                body
            }),
            invalidatesTags: ['Reviews']
        }),
        getAllReviews: builder.query({
            query: () => ({
                url: "/reviews"
            }),
            providesTags: ['Reviews']
        })
    })
});

export const { useCreateReviewMutation, useGetAllReviewsQuery } = reviewApi;