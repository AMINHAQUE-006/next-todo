// src/services/userService.ts
// Instead of writing fetch() calls manually, RTK Query generates them.
// We "inject" endpoints into the base apiSlice from feature-specific files.
// This keeps code modular - each feature manages its own API calls.
//
// After defining these, RTK Query auto-creates:
//   useGetProfileQuery()      → for fetching
//   useUpdateProfileMutation() → for mutations (POST/PUT/DELETE)

import { apiSlice } from '@/store/api/apiSlice';

interface Profile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
}

interface UpdateProfilePayload {
  name?: string;
  bio?: string;
  avatar?: string;
}

// injectEndpoints adds these endpoints to the base apiSlice
export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // builder.query = GET request (read data)
    getProfile: builder.query<Profile, void>({
      query: () => '/profile',
      providesTags: ['Profile'], // Cache tag - invalidated by 'Profile' mutations
    }),

    // builder.mutation = POST/PUT/DELETE (modify data)
    updateProfile: builder.mutation<Profile, UpdateProfilePayload>({
      query: (body) => ({
        url: '/profile',
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Profile'], // After update, refetch getProfile automatically
    }),
  }),
});

// These hooks are auto-generated! Use them in components directly
export const { useGetProfileQuery, useUpdateProfileMutation } = userApiSlice;
