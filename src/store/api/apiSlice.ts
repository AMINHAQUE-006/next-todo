
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../index';

export const apiSlice = createApi({
  // Unique key for this API in the Redux store
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({
    // Reads from your .env.local file
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,

    // This function runs before EVERY request - great for adding auth headers
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  // Tag types are used for cache invalidation
  // Example: After creating a user, invalidate the 'User' tag to refetch the list
  tagTypes: ['User', 'Profile'],

  // All endpoints are injected from feature-specific files (see services/)
  // This keeps the code organized and avoids one giant apiSlice file
  endpoints: () => ({}),
});
