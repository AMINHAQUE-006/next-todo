import { apiSlice } from '@/store/api/apiSlice';
import { setCredentials } from '@/store/slices/authSlice';

interface LoginPayload {
  email: string;
  password: string;
}

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

interface AuthResponse {
  user: {
    id: string;
    name: string;
    email: string;
  };
  token: string;
}

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginPayload>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials({ user: data.user, token: data.token }));
        } catch (error) {
          console.error('Login failed:', error);
        }
      },
    }),

    register: builder.mutation<AuthResponse, RegisterPayload>({
      query: (userData) => ({
        url: '/auth/register',
        method: 'POST',
        body: userData,
      }),
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials({ user: data.user, token: data.token }));
        } catch (error) {
          console.error('Register failed:', error);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApiSlice;
