import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface TurnstileState {
  token: string | null;
  shouldReset: boolean;
}

const initialState: TurnstileState = {
  token: "EMPTY",
  shouldReset: false,
};

const turnstileSlice = createSlice({
  name: "turnstile",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string | null>) {
      state.token = action.payload;
      state.shouldReset = false;
    },
    clearToken(state) {
      state.token = null;
      state.shouldReset = false;
    },
    markForReset(state) {
      state.shouldReset = true;
    },
    resetCompleted(state) {
      state.shouldReset = false;
      state.token = "EMPTY";
    },
  },
});

export const { setToken, clearToken, markForReset, resetCompleted } =
  turnstileSlice.actions;
export default turnstileSlice.reducer;
