import type { SerializedError } from "@reduxjs/toolkit";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export function getErrorMessage(error: unknown): string {
  if (!error) return "Unknown error";
  console.error(error);

  // Type guard for FetchBaseQueryError
  if (
    typeof error === "object" &&
    error !== null &&
    "status" in error &&
    "data" in error
  ) {
    const fetchError = error as FetchBaseQueryError;
    const data = fetchError.data;
    // If data is a string, return it
    if (typeof data === "string") return data;
    // If data is an object, check for error/message keys
    if (typeof data === "object" && data !== null) {
      if ("error" in data && typeof (data as any).error === "string") {
        return String((data as any).error);
      }
      if ("message" in data && typeof (data as any).message === "string") {
        return String((data as any).message);
      }
    }
    // Fallback to status
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
