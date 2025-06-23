import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tradiumApi = createApi({
    reducerPath: 'tradiumApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://ecommerce.ibradev.me/' }),
    tagTypes: ['category','products'],
    endpoints: ((builder) => ({
        getAllCategories: builder.query({
            query: () => 'categories/all',
            providesTags: ['category']
        }),
        getAllProducts : builder.query({
            query : () => 'products/all',
            providesTags : ['products']
        }),
        getSearchedProducts : builder.query({
            query : (value) => `products/search?q=${value}`,
            providesTags : ['products']
        })
    }))
})

export const { 
    useGetAllCategoriesQuery,
    useGetAllProductsQuery,
    useGetSearchedProductsQuery
} = tradiumApi