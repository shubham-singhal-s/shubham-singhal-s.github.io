import type { GeminiChatMessage, GeminiChatRequest } from "@/types/ai";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface CustomRequest {
  data: GeminiChatRequest;
  token?: string;
}

export const cvApi = createApi({
  reducerPath: "cvApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cv-api.shubham21197.workers.dev/api/",
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
