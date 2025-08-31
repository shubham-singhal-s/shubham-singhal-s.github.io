import type { GeminiChatMessage, GeminiChatRequest } from "@/types/ai";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store";

export interface CustomRequest {
  data: GeminiChatRequest;
  token?: string;
}

export const cvApi = createApi({
  reducerPath: "cvApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cv-api.shubham21197.workers.dev/api/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).turnstile.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    sendChat: build.mutation<GeminiChatMessage[], CustomRequest>({
      query: (request) => ({
        url: "ai",
        method: "POST",
        body: request,
      }),
    }),
  }),
});

export const { useSendChatMutation } = cvApi;
