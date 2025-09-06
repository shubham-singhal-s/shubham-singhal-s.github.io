import type { GeminiChatMessage, GeminiChatRequest } from "@/types/ai";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { markForReset } from "../reducers/turnstile";
import type { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://cv-api.shubham21197.workers.dev/api/",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).turnstile.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    api.dispatch(markForReset());
  }

  return result;
};

export interface CustomRequest {
  data: GeminiChatRequest;
  token?: string;
}

export const cvApi = createApi({
  reducerPath: "cvApi",
  baseQuery: baseQueryWithReauth,
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
