import { baseApi } from "../../api/baseApi";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        updateUserAccountInfo: builder.mutation({
            query: (body) => ({
                url: "/auth/update-account-info",
                method: 'PUT',
                body
            }),
            invalidatesTags: ['Users']
        }),
        getAllUsers: builder.query({
            query: () => ({
                url: "/auth/users"
            }),
            providesTags: ['Users']
        }),
        makeUserAdmin: builder.mutation({
            query: (userId) => ({
                url: `auth/make-user-admin/${userId}`,
                method: 'PUT'
            }),
            invalidatesTags: ['Users']
        })
    })
})

export const {
    useUpdateUserAccountInfoMutation,
    useGetAllUsersQuery,
    useMakeUserAdminMutation
} = userApi