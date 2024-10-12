import { baseApi } from "../../api/baseApi";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // login endPoint
        login: builder.mutation({
            query: (credentials) => ({
                url: `/auth/login`,
                method: 'POST',
                body: credentials
            })
        }),
        // sign up endpoint
        signup: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/signup',
                method: 'POST',
                body: userInfo,
            }),
        }),
    })
})

export const { useLoginMutation, useSignupMutation } = authApi;