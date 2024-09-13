// apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://miri-dev-api.drishtee.in/api/v1/' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products?isBarter=false',
        }),
    }),
});

export const { useGetProductsQuery } = apiSlice;
