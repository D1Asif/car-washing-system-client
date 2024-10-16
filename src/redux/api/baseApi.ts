import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}`,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token
        if (token) {
            headers.set('Authorization', `Bearer ${token}`)
        }
        return headers;
    }
})

const baseQueryWithLogout: typeof baseQuery = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
        // Token has expired or is invalid, log the user out
        api.dispatch(logout());
    }

    return result;
};

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQueryWithLogout,
    tagTypes: ['Services', 'Slots', 'Users', 'Reviews'],
    endpoints: () => ({})
});