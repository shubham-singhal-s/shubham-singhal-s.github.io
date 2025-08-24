import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface TurnstileState {
  token: string | null;
}

const initialState: TurnstileState = {
  token: null,
};

const turnstileSlice = createSlice({
  name: "turnstile",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string | null>) {
      state.token = action.payload;
    },
    clearToken(state) {
      state.token = null;
    },
  },
});

export const { setToken, clearToken } = turnstileSlice.actions;
export default turnstileSlice.reducer;
