import type { SerializedError } from "@reduxjs/toolkit";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export function getErrorMessage(error: unknown): string {
  if (!error) return "Unknown error";

  // FetchBaseQueryError
  if (typeof error === "object" && error !== null && "status" in error) {
    const fetchError = error as FetchBaseQueryError;
    if (typeof fetchError.data === "string") return fetchError.data;
    if (
      typeof fetchError.data === "object" &&
      fetchError.data !== null &&
      "message" in fetchError.data
    ) {
      return String((fetchError.data as any).message);
    }
    return `Error status: ${fetchError.status}`;
  }

  // SerializedError
  if (typeof error === "object" && error !== null && "message" in error) {
    return String((error as SerializedError).message);
  }

  // Fallback
  if (typeof error === "string") return error;
  return "Unknown error";
}
