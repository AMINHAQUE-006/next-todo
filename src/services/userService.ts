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

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<Profile, void>({
      query: () => '/profile',
      providesTags: ['Profile'],
    }),

    updateProfile: builder.mutation<Profile, UpdateProfilePayload>({
      query: (body) => ({
        url: '/profile',
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Profile'],
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = userApiSlice;
