import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface CustomRequest {
  token: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cv-api.shubham21197.workers.dev/api/",
  }),
  endpoints: (build) => ({
    authenticate: build.mutation<CustomRequest, CustomRequest>({
      query: (request) => ({
        url: "auth",
        method: "POST",
        body: request,
      }),
    }),
  }),
});

export const { useAuthenticateMutation } = authApi;
