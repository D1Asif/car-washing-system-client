import { baseApi } from "../../api/baseApi";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        updateUserAccountInfo: builder.mutation({
            query: (body) => ({
                url: "/auth/update-account-info",
                method: 'PUT',
                body
            })
        })
    })
})

export const { useUpdateUserAccountInfoMutation } = userApi